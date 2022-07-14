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
            url: "/api/users/@me",
            method: "GET",
            auth: token
        }).then(response => {
            if (response.status == 200) {
                session.value = { token, user: response.data }
            } else {
                localStorage.removeItem("token");
            }

            loading.value = false;
        })
    } else {
        loading.value = false;
    }
}