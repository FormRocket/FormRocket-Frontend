import { request } from '@/services/request.js'
import { ref } from 'vue'

export const loading = ref(true);
export const session = ref({ token: null, user: null});

let isLoginProccesing = false;

const numberRegex = /^\d*$/;
const tokenRegex = /^[a-zA-Z0-9_-]*\.[a-zA-Z0-9_-]{43}$/;


//   "In honor of AR"
// - NSI, 2022

// function ballSack(testicle1, testicle2) {
//     var cemen = atob('♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂♂')
//     return (testicle1 + testicle2) * 100 / cemen.length 
// }

// console.log(ballSack(69, 420))

function _stringToUint8Array(string) {
    var binary_string = string.replace(
      /([\u0100-\uFFFF])/g,
      (x) => "\\u" + x.charCodeAt().toString(16).padStart(4, "0")
    );
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

class B64URL {
    static encode(input) {
        try {
            return window.btoa(input).replace(/\+/g, '-').replace(/\//g, '_');
        } catch {
            return "";
        }
    }

    static decode(input, returnRaw) {
        try {
            const result = window.atob(input.replace(/-/g, '+').replace(/_/g, '/'));
            if (returnRaw) {
                return _stringToUint8Array(result);
            }
            return result;
        } catch {
            return returnRaw ? new Uint8Array() : "";
        }
    }
}


function validateToken(token) {
    if (!tokenRegex.test(token)) return false;
    const parts = token.split(".");
    const uid = B64URL.decode(parts[0]);
    if (!numberRegex.test(uid)) return false;

    const rid = B64URL.decode(parts[1], true);
    if (rid.length !== 32) return false;

    return true;
}

export async function login() {
    if (isLoginProccesing) return;
    isLoginProccesing = true;

    const response = await request({
        url: "/api/auth/login/github",
        method: "GET"
    });

    if (response.data.url) {
        window.location.href = response.data.url;
    } else {
        isLoginProccesing = false;
        alert("Something went wrong while attempting to login.");
    }
}

export function reloadAuth() {
    const token = localStorage.getItem("token");
    if (validateToken(token)) {
        loading.value = true;
        request({
            url: "/api/users/@me?withForms=true",
            method: "GET",
            auth: token
        }).then(response => {
            if (response.status == 200) {
                session.value = { token, user: response.data, forms: response.data.forms }  // forms is kinda useless, since its already in the user object 💀
            } else if (response.status == 401) {
                localStorage.removeItem("token");
            }

            loading.value = false;
        })
    } else {
        loading.value = false;
    }
}

export function logout() {
    localStorage.removeItem("token");
    //session.value = { token: null, user: null }
    window.location.href = '/'
}