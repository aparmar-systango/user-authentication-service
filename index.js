const UserService = require('./user/user')
const Utility = require('./utils/Utility')
const userService = new UserService();

async function login(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['email', 'pass', 'device_token', 'device_id', 'os_type'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.login(user)
    return response;
}

async function register(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['email', 'pass', 'username', 'name', 'favorite_team_id', 'dob'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.register(user)
    return response;
}

async function logout(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.path, ['user_id'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.logout(user)
    return response;
}

async function deleteUser(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.path, ['user_id'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['email', 'pass'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.deleteUser(user)
    return response;
}

async function resetPassword(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.path, ['user_id'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['email'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.resetPassword(user)
    return response;
}

async function updateImageUrl(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.path, ['user_id'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['pass'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.query, ['image_url'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.updateImageUrl(user)
    return response;
}

async function updateUser(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.path, ['user_id'])
    if (validation.isError) {
        throw validation
    }
    validation = await Utility.has(user.body, ['pass', 'update'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.updateUser(user)
    return response;
}


async function getAwsS3(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.getAwsS3(user)
    return response;
}

async function getAwsS3ForMediaSharing(user) {
    let validation = await Utility.has(user.headers, ['ostype', 'appversion', 'appid', 'authorization'])
    if (validation.isError) {
        throw validation
    }
    let response = await userService.getAwsS3ForMediaSharing(user)
    return response;
}

(async () => {
    try {
        let data = await getAwsS3ForMediaSharing({
            headers: {
                ostype: 'ios',
                appversion: 5.02,
                appid: 'D2T',
                authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTI2MDkxIiwiY29va2llX3ZhbHVlIjoiIiwiaXNfc3Vic2NyaWJlZCI6MSwibGV2ZWwiOiIiLCJ0b2tlbl9pZCI6OTg0NjMzLCJkZXZpY2VfaWQiOiJoZ2ZoZ2ZuZyIsIm9zX3R5cGUiOm51bGwsInZlcnNpb24iOiIxLjAuMCIsImZpcnN0X25hbWUiOiJKYWNreSIsImxhc3RfbmFtZSI6IiIsInN1YiI6MTI2MDkxLCJpc3MiOiJodHRwOlwvXC9iYXNlYmFsbC5jYXJkLXZpZXdlci5hcGkuc3RhZ2luZy5zdHJhdC1vLW1hdGljLmNvbVwvcHVibGljXC9pbmRleC5waHBcL3N0cmF0XC9hcGlcL3YxXC91c2Vyc1wvd3d3XC9zZXNzaW9uIiwiaWF0IjoxNTQ3NDYxNDY5LCJleHAiOjE1NDc1MTEzMjksIm5iZiI6MTU0NzQ2MTQ2OSwianRpIjoiODc5NTBmM2Q4OThmODMzNzg3YjNlZmU2Njg3NTEwNzMifQ.MDa2IMU5yOZ-6Rd5Tsq6G5hJIUKZidoMhgvvLmosuNA`
            },
            body: {
                email: 'Jacky@yopmail.com',
                pass: 'UNN0+gX4cVw=',
                username: 'Jacky',
                name: 'Jacky',
                favorite_team_id: 1,
                dob: new Date(),
                device_token: 'fdgfdfgfd',
                device_id: 'hgfhgfng',
                os_type: 'ios',
                update: {
                    first: "Jacky",
                    last: "John"
                }
            },
            path: {
                user_id: 126091
            },
            query: {
                image_url: 'https://user-data-report.s3.amazonaws.com/uploads/1542632964'
            }
        })
        console.log('RESULT ::: ', data)
    } catch (err) {
        console.log('ERROR :::: ', err)
    }
})()

function StratOMaticUserService() {
    this.login = login,
        this.register = register,
        this.logout = logout,
        this.deleteUser = deleteUser,
        this.resetPassword = resetPassword,
        this.updateImageUrl = updateImageUrl
    this.updateUser = updateUser,
        this.getAwsS3 = getAwsS3,
        this.getAwsS3ForMediaSharing = getAwsS3ForMediaSharing
}

module.exports = StratOMaticUserService