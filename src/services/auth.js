import { request } from '@/services/request.js'
import { ref } from 'vue'

export const loading = ref(true);
export const session = ref({ token: null, user: null});

let isLoginProccesing = false;

const tokenRegex = /^[0-9A-Fa-f]{64}$/;

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
    if (tokenRegex.test(token)) {
        loading.value = true;
        request({
            url: "/api/users/@me?withForms=true",
            method: "GET",
            auth: token
        }).then(response => {
            if (response.status == 200) {
                session.value = { token, user: response.data, forms: response.data.forms }  // forms is kinda useless, since its already in the user object 💀
            } else {
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
    session.value = { token: null, user: null }
}