import app from "./app.js";
import 'dotenv/config';
import { testConnection, sql } from "./db_connection.js";

// const port = process.env.PORT;

const serverPort = process.env.PORT;

(async () => {
    try {
        await testConnection();

        app.listen(serverPort, () => {
            console.log(`Server is ready and using ${serverPort} port`);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
})()

process.on("SIGINT", async () => {
  console.log("Closing database");
  await sql.end();   
  process.exit(0); 
})