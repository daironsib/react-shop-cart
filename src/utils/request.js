const URL = `https://5c5d6fa0ef282f0014c3d936.mockapi.io/`

export function request(type, uri, body = {}) {
    if (type === 'GET') {
        return fetch(`${URL}${uri}`, {
            method: type,
            headers: {'content-type': 'application/json'}
        })
    } else {
        return fetch(`${URL}${uri}`, {
            method: type,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(body)
        })
    }
}