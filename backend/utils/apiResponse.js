class ApiResponse {

    static success(res, message, data = null, meta = null, statusCode = 200) {

        return res.status(statusCode).json({

            success: true,

            message,

            data,

            meta

        });

    }

    static error(res, message, statusCode = 500) {

        return res.status(statusCode).json({

            success: false,

            message

        });

    }

}

module.exports = ApiResponse;