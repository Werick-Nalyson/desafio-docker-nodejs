const express = require('express')
const faker = require('faker')
const mysql = require('mysql')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {
  const name = faker.name.findName()

  await connection.query(`INSERT INTO user (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM user`, (error, results, fields) => {
    console.log(error)
    console.log(results)
    console.log(fields)
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${Array.isArray(results) ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Up on:', port);
})