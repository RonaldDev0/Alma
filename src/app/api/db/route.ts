import mysql from 'mysql2/promise'

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.LOCAL_DB_IP,
      port: Number(process.env.LOCAL_DB_PORT),
      user: process.env.LOCAL_DB_USER,
      password: process.env.LOCAL_DB_PASSWORD,
      database: process.env.LOCAL_DB_NAME
    })

    const [rows] = await connection.execute('SHOW TABLES;')
    await connection.end()

    return Response.json({ tables: rows })
  } catch (error) {
    console.error(error);
    let message = 'An unknown error occurred'
    if (error instanceof Error) {
      message = error.message;
    }
    return Response.json({ error: message }, { status: 500 })
  }
}