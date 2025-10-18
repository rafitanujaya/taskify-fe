import config from "../../config/index.js"

const stats = async (token) => {
    return fetch(`${config.BASE_URL}/tasks/stats`, {
        headers: {
            'Accept' : 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
}


export default {
    stats
}