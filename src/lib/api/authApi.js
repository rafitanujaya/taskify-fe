import config from "../../config/index.js"

const login = async ({email, password}) => {
    return fetch(`${config.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'Application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })
}

const register = async ({username, email, password}) => {
    return fetch(`${config.BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'Application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
}

const verify = async (token) => {
    return fetch(`${config.BASE_URL}/auth/verify`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default {
    login,
    register,
    verify
}