

const errorHandler = (err, req, res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    const error = {
        status: statusCode,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null: err.stack,
    }
    res.status(statusCode);
    res.json(error);
}



module.exports = {
    errorHandler,
}