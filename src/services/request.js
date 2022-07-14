import { apiURL } from '@/services/constants.js'

export async function request(options) {
    try {
        const headers = {
            "Content-Type":"application/json",
        }
        if (options.auth) {
            headers.authorization = options.auth;
        }
        const requestOptions = {
            method: options.method || "GET",
            headers
        }
        if (options.body) {
            requestOptions.body = JSON.stringify(options.body)
        }
        const response = await fetch(`${apiURL}${options.url}`, requestOptions);
        var responesBody = {};
        try {
            responesBody = await response.json();
        } catch {
            responesBody = {}
        }
        return { status: response.status, data: responesBody }
    } catch(e) {
        return { status: 500, data: {} }
    }
}