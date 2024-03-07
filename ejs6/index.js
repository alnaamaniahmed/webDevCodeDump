import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});


db.connect();

db.query("SELECT * FROM table", (err, res) => {
  if(err){
    console.error("Executing query encountered an error", err.stack);
  } else {
    //do smthing 
  }
  db.end();
});




