 require("dotenv").config()


exports.dev ={
    app: {
        port: process.env.port || 4000
    },
    DB : {
        URL:process.env.URL_DB
    }
}