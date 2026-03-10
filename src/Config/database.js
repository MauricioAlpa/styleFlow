import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

export const pool = new Pool({
  connectionString: "postgresql://user1:senhaUser1@66.70.160.251:5432/flowdb",
});
