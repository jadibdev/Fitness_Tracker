const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.url}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    /*check if status is 200 just respond with a 500 error, 
    otherwise just use statuscode already specified */
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    // put it simply, you always need to return a status ...
    res.status(statusCode)
    res.json({
        message: error.message,
        // check if in production, don't show the stack trace
        stack: process.env.NODE_ENV === 'production' ? 'something for production' : error.stack,
    })
}

module.exports = {
    notFound,
    errorHandler
}