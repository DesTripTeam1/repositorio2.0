const express = require('express')
const helmet = require("helmet");
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config()

const app = express()
app.use(cors());
app.use(helmet());



app.use(express.json())
app.use(function(req, res, next){
    console.log("")
    next()
})
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

app.get('/get/ciudades',(req,res) => {
    let sql = 'SELECT * FROM espana'

    pool.query(sql,(err, rows) => {

        if(err) return res.status(500).send(err)

        res.status(200).json(rows)
    })
})

app.get('/get/input',(req,res) => {
    let sql = 'SELECT * FROM input'

    pool.query(sql,(err, rows) => {

        if(err) return res.status(500).send(err)

        res.status(200).json(rows)
    })
})

app.get('/get/output',(req,res) => {
    let sql = 'SELECT * FROM output'

    pool.query(sql,(err, rows) => {

        if(err) return res.status(500).send(err)

        res.status(200).json(rows)
    })
})

app.post('/travel/input',(req,res) => {

    const {provincia, entorno, actividades} = req.body
    console.log(req.body)


    pool.query(`INSERT INTO input (PROVINCIAS, ENTORNO, ACTIVIDADES) VALUES (${provincia}, "${entorno}", "${actividades}")`, (err, rows) => {
        if(err) return res.status(500).send(err)

        res.status(201).json({message: `datos enviados`})
    })
})

app.post('/travel/output',(req,res) => {

    const {provincia, ubicacion, nombre} = req.body
    console.log(req.body)


    pool.query(`INSERT INTO output (ID_PROVINCIAS, UBICACION, NOMBRE) VALUES (${provincia}, "${ubicacion}", "${nombre}")`, (err, rows) => {
        if(err) return res.status(500).send(err)

        res.status(201).json({message: `datos enviados`})
    })
})

app.listen(3000, () => {
    console.log("Server on");
})