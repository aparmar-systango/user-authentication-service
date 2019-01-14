async function has(object, keys) {
    var result = { isError: false, required: [], message: '' }
    if (!object) {
        result.isError = true
        result.message = 'Required fields.'
        result.required = keys
        return result
    }
    await Promise.all(keys.map(key => {
        if (!object.hasOwnProperty(key)) {
            result.required.push(key)
        }
    }))
    if (result.required.length) {
        result.isError = true
        result.message = 'Required fields.'
    }
    return result
}

module.exports = {
    has: has
}
