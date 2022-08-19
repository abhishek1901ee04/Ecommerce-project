const app= require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const { ControlCameraSharp } = require("@material-ui/icons");

// Handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the Process due to Uncaught Exception");
    process.exit(1);
}); 


// const { path } = require("./app");
// config 
dotenv.config({path:"backend/config/config.env"});
 // conncecting to database
connectDatabase();
app.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
})

// unhandled Promise Rejection 
process.on("unhandledRejection",(err)=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close (() => {
        process.exit(1);
    });
});