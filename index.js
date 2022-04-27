import { app } from "./server/app.js";
import { connectDB } from "./server/db.js";
import { PORT } from "./server/config.js";

connectDB();
app.listen(PORT);
console.log("Server on port", PORT);
