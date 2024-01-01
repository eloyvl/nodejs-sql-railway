import express from 'express';
import { pool } from './db.js';
import { PORT } from './config.js';


const app = express()

app.get('/', async (req, res) => {
  const SQL = 'SELECT * FROM users;'
  const [rows] = await pool.query( SQL)
  //res.send('Bienvenido')
  res.json(rows)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "hola mundo" as RESULT');
  console.log(result[0])
  //res.send('Bienvenido al ping')
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const SQL = 'INSERT INTO users(name) VALUES ("Pedro")';
  const result = await pool.query( SQL );
  res.json(result)
})


app.listen(PORT)
console.log('server en el puerto ', PORT)