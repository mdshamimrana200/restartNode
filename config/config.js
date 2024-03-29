 require("dotenv").config()


exports.dev ={
    app: {
        port: process.env.port || 4000
    },
    DB : {
        URL:process.env.URL_DB || "mongodb://1270.0.0.1:17027/TESTdatabase"
    }
}