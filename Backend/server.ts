import express, { query } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mysql from 'mysql2'

dotenv.config()

const db = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
})

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
   const query = `SELECT * FROM excursions`

   db.query(query, (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao encontrar as Excursões' })
      } else {
         res.status(200).send({ msg: 'Excursões encontrados', result })
      }
   })
})

server.post('/excursion', (req, res) => {
   const { thumb, title, prevValueExc, valueExc, descriptionExc, dateExc, returnExc } = req.body

   const query = `INSERT INTO excursions (thumb, title, prevValueExc, valueExc, descriptionExc, dateExc, returnExc) VALUES (?, ?, ?, ?, ?, ?, ?)`

   db.query(query, [thumb, title, prevValueExc, valueExc, descriptionExc, dateExc, returnExc] , (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro adicionar excursão.'})
      } else {
         res.status(201).send({ msg: 'Excursão adicionada com sucesso', result })
      }
   })
})

server.put('/excursion/:id', (req, res) => {
   const { id } = req.params
   const { thumb, title, prevValueExc, valueExc, descriptionExc, dateExc, returnExc } = req.body

   const checkIfExcursionExist = `SELECT * FROM excursions WHERE id = ${ id }`

   db.query(checkIfExcursionExist, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao encontrar excursão.'})
      } else if (JSON.stringify(result).length < 1) {    
         res.status(400).send({ msg: 'Erro ao encontrar excursão para editar.'})
      } else {
         console.log(JSON.stringify(result), id)
         const query = `UPDATE excursions SET thumb = ?, title = ?, prevValueExc = ?, valueExc = ?, descriptionExc = ?, dateExc = ?, returnExc = ? WHERE id = ${ id }`
         
         db.query(query, [ thumb, title, prevValueExc, valueExc, descriptionExc, dateExc, returnExc] , (err, result) => {
            if(err) {
               console.log(err)
               res.status(404).send({ msg: 'Erro editar excursão.'})
            } else {
               res.status(200).send({ msg: 'Excursão editada com sucesso.', result })
            }
         })
      }
   })

})

server.delete('/excursion/:id', (req, res) => {
   const { id } = req.params

   const query = `DELETE FROM excursions WHERE id = ${ id }`

   db.query(query, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao tentar excluir excursão.'})
      } else {
         res.status(200).send({ msg: 'Excursão excluida com sucesso.' })
      }
   })
})

server.listen(3002, () => console.log('Running on port 3002'))