
import pg from 'pg';
const { Client } = pg;

const client = new Client({
  user: 'postgres',
  host: 'db.gfjvjatvibiwkbgeymlt.supabase.co',
  database: 'postgres',
  password: 'sPJSV?4GKDE5bB+',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

async function main() {
  try {
    await client.connect();
    console.log('✅ Successfully connected to the database!');
    
    // Test query 1: current time
    const resNow = await client.query('SELECT NOW()');
    console.log('Current time from database:', resNow.rows[0].now);
    
    // Test query 2: get services
    const resServices = await client.query('SELECT * FROM services LIMIT 5');
    console.log('\nServices:', resServices.rows);
    
    await client.end();
  } catch (err) {
    console.error('❌ Error connecting to database:', err);
  }
}

main();
