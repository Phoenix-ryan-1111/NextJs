// import { Pool } from "pg";
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: 5432,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// async function listInvoices() {
//   const data = await pool.query(`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `);

//   return data.rows;
// }

// export async function GET() {
//   try {
//     return Response.json(await listInvoices());
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
