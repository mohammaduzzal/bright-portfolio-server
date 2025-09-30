import http, { Server } from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config()
// console.log("Loaded from .env ->", process.env.PORT);


let server: Server | null = null

async function startServer() {
    try {

        server = http.createServer(app)
        server.listen(process.env.PORT, () => {
            console.log(`🚀 Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("❌ Error during server startup:", error);
        process.exit(1)
    }
}

async function gracefulShutdown(signal: string) {
    console.warn(`🔄 Received ${signal}, shutting down gracefully...`);

    if (server) {
        server.close(async () => {
            console.log("✅ HTTP server closed.");

            try {
                console.log("Server shutdown complete.");
            } catch (error) {
                console.error("❌ Error during shutdown:", error);
            }

            process.exit(0)

        })
    } else {
        process.exit(0)
    }
}



function handleProcessEvents() {
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"))
    process.on("SIGINT", () => gracefulShutdown("SIGINT"))

    process.on("uncaughtException", (error) => {
        console.error("💥 Uncaught Exception:", error);
        gracefulShutdown("uncaughtException");
    })

    process.on("unhandledRejection", (reason) => {
        console.error("💥 Unhandled Rejection:", reason);
        gracefulShutdown("unhandledRejection");
    })
}




startServer()
