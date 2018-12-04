rp = require('request-reponse')
const PHP_URL = process.env.PHP_URL

async function login(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/users/www/session',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            form: {
                email: user.body.email,
                pass: user.body.pass,
                device_token: user.body.device_token,
                device_id: user.body.device_id,
                os_type: user.body.os_type
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function register(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/users/www',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            form: {
                email: user.body.email,
                pass: user.body.pass,
                username: user.body.username,
                name: user.body.name,
                favorite_team_id: (user.body.hasOwnProperty('favorite_team_id')) ? user.body.favorite_team_id : 0,
                dob: user.body.dob
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function logout(user) {
    try {
        let options = {
            method: 'DELETE',
            url: PHP_URL + '/auth/' + user.path.user_id,
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'authorization': user.headers.authorization,
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function deleteUser(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/auth/' + user.path.user_id,
            headers: {
                'authorization': user.headers.authorization,
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function resetPassword(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/users/' + user.path.user_id + '/password',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'authorization': user.headers.authorization,
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            form: {
                email: user.body.email
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function updateImageUrl(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/users/' + user.path.user_id + '/image',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'authorization': user.headers.authorization,
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            form: {
                pass: user.body.pass
            },
            qs: {
                image_url: user.query.image_url
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw errs
    }
}

async function updateUser(user) {
    try {
        let options = {
            method: 'POST',
            url: PHP_URL + '/users/' + user.path.user_id,
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'authorization': user.headers.authorization,
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            form: {
                pass: user.body.pass,
                update: user.body.update
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function getAwsS3(user) {
    try {
        let options = {
            method: 'GET',
            url: PHP_URL + '/s3',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

async function getAwsS3ForMediaSharing(user) {
    try {
        let options = {
            method: 'GET',
            url: PHP_URL + '/s3ForMediaShare',
            headers: {
                'content-type': 'application/x-www-from-urlencoded',
                'ostype': user.headers.ostype,
                'appversion': user.headers.appversion,
                'appid': user.headers.appid
            },
            json: true,
            resolveWithFullResponse: true
        }
        let response = await rp(options)
        return {
            status: response.statusCode,
            body: response.body
        }
    } catch(err) {
        throw err
    }
}

export const UserService =  {
    login: login,
    register: register,
    logout: logout,
    deleteUser: deleteUser,
    resetPassword: resetPassword,
    updateImageUrl: updateImageUrl,
    updateUser: updateUser,
    getAwsS3: getAwsS3,
    getAwsS3ForMediaSharing: getAwsS3ForMediaSharing
}