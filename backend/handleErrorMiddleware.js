class ErrorObj extends Error {
    status;

    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message
    }
}


const handleError = (err, req, res, next) => {

    return res.status(err.status || 500).json({
        status: "error",
        error: {
            name: err.name,
            message: err.message || "internal server error"
        }
    })
}

module.exports = {handleError, ErrorObj}