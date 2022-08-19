const ErrorHandler = require("../utils/errorhandler");
module.exports = (err,req,res, next) =>{
    err.statusCode =err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongodb Id error
    if(err.name == "CastError") {
        const message = `Resource not found . Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }
    // Moongoose duplicate key error
    if(err.code == 11000){
        const message =`duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message,400);
    }
    // Wrong JWT Error
    if(err.name =="JsonWebTokenError"){
        const message =`json webtoken is inavalid, try again`;
        err = new ErrorHandler(message,400);
    }
    // JWT Expitre  Error
    if(err.name =="TokenExpireError"){
        const message =`json webtoken is inavalid, try again`;
        err = new ErrorHandler(message,400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};