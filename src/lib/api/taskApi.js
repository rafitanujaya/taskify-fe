import config from "../../config/index.js"

const create = async ( title, status, description, token) => {
    return fetch(`${config.BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Accept' : 'Application/json',
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({title, status, description})
    })
}

const latest = async (token) => {
    return fetch(`${config.BASE_URL}/tasks/latest`, {
        method: 'GET',
        headers: {
            'Accept' : 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
}


const getGroupedTask = async (token) => {
    return fetch(`${config.BASE_URL}/tasks/grouped`, {
        method: 'GET',
        headers: {
            'Accept' : 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

const update = async (id, title, status, description, token) => {
    return fetch(`${config.BASE_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Accept' : 'Application/json',
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({title, status, description})
    })
}

const deleteTask = async (id, token) => {
    return fetch(`${config.BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept' : 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export default {
    create,
    latest,
    getGroupedTask,
    update,
    deleteTask
}