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

server.get('/excursions', (req, res) => {
   const query = `SELECT * FROM excursions`

   db.query(query, (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao encontrar as Excursões' })
      } else {
         res.status(200).send({ msg: 'Excursões encontrados', result })
      }
   })
})

server.get('/excursion/:id', (req, res) => {
   const { id } = req.params

   const query = `SELECT * FROM excursions WHERE id = ?`

   db.query(query, [id], (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao encontrar as Excursões' })
      } else {
         res.status(200).send({ msg: 'Excursões encontrados', result })
      }
   })
})

server.post('/excursion', (req, res) => {
   const { thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, openModal } = req.body

   const query = `INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, openModal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

   db.query(query, [thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, openModal] , (err, result) => {
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
   const { thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, openModal } = req.body

   const checkIfExcursionExist = `SELECT * FROM excursions WHERE id = ${ id }`

   db.query(checkIfExcursionExist, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao encontrar excursão.'})
      } else if (JSON.stringify(result).length < 1) {    
         res.status(400).send({ msg: 'Erro ao encontrar excursão para editar.'})
      } else {
         console.log(JSON.stringify(result), id)
         const query = `UPDATE excursions SET thumbnail = ?, titleExc = ?, prevValueExc = ?, currentValueExc = ?, descriptionExc = ?, dateExc = ?, returnExc = ?, openModal = ? WHERE id = ${ id }`
         
         db.query(query, [ thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, openModal] , (err, result) => {
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

   const checkIfExcursionExist = `SELECT * FROM excursions WHERE id = ?`
   const query = `DELETE FROM excursions WHERE id = ${ id }`

   db.query(checkIfExcursionExist, [id], (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: `Erro, tente novamente mais tarde.` })
      } else if(JSON.parse(JSON.stringify(result)).length > 0) {
         db.query(query, (err, result) => {
            if(err) {
               console.log(err)
               res.status(404).send({ msg: `Erro ao tentar excluir excursão.`})
            } else {
               res.status(200).send({ msg: `Excursão excluída com sucesso.` })
            }
         })
      } else {
         res.status(401).send({ msg: `Erro ao tentar excluir excursão de id ${id}.`})
      }
   })

})

server.delete('/AllExcursions', (req, res) => {

   const query = `DELETE FROM excursions`
   const reset = `ALTER TABLE excursions AUTO_INCREMENT = 1`

   db.query(query, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao tentar excluir excursão.'})
      } else {
         db.query(reset, (err, result) => {
            if(err) {
               console.log(err)
               res.status(404).send({ msg: 'Erro ao tentar resetar o auto increment.'})
            } else {
               res.status(200).send({ msg: 'Excursões deletadas e ID resetado.' })
            }
         })
      }
   })
})

// Manager User 
server.get('/users', (req, res) => {
   const query = `SELECT * FROM users`

   db.query(query, (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao encontrar os Usuários' })
      } else {
         res.status(200).send({ msg: 'Usuários encontrados', result })
      }
   })
})

server.get('/user/:id', (req, res) => {
   const { id } = req.params

   const query = `SELECT * FROM users WHERE idUser = ?`

   db.query(query, [id] , (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao encontrar o usuário.' })
      } else if(JSON.parse(JSON.stringify(result)).length > 0) {

         res.status(200).send({ msg: 'Usuário encontrado', result })
      } else {
         res.status(401).send({ msg: 'Usuário não encontrado.' })
      }
   })
})

server.post('/user', (req, res) => {
   const { nameUser, loginUser, passwordUser } = req.body

   const checkIfLoginExist = `SELECT * FROM users WHERE loginUser = ?`
   const query = `INSERT INTO users (nameUser, loginUser, passwordUser) VALUES (?,?,?)`

   db.query(checkIfLoginExist, [loginUser], (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro, tentenovamente mais tarde.'})
      } else if (JSON.parse(JSON.stringify(result)).length > 0) {  
         console.log(nameUser, loginUser, passwordUser)
         console.log(result)  
         res.status(400).send({ msg: 'Login de usuário não permitido.'})

      } else {
         const hashPassword = bcrypt.hashSync(passwordUser, 10)

         db.query(query, [nameUser, loginUser, hashPassword], (err, result) => {
            if(err) {
               console.log(err)
            } else {
               res.status(201).send({ msg: 'Usuário adicionado com sucesso', result })
            }
         })
      }
   })
})

server.post('/login', (req, res) => {
   const { loginUser, passwordUser } = req.body

   const checkIfLoginExist = `SELECT * FROM users WHERE loginuser = ?`

   db.query(checkIfLoginExist, [loginUser], (err, result) => {
      if(err) {
         console.log(err)
         res.status(500).send({ msg: 'Erro ao tentar fazer login.'})
      } else if (JSON.parse(JSON.stringify(result)).length > 0) { 
         console.log(JSON.parse(JSON.stringify(result))[0])
         const user = (JSON.parse(JSON.stringify(result))[0])

         const decryptedPass = bcrypt.compareSync(passwordUser, user.passwordUser)

         if(decryptedPass) {

            const token = jwt.sign(
               { loginUser: loginUser, passwordUser: passwordUser }, // Identificação
               process.env.SECRET!,
               { expiresIn: '2h' } // Tempo de expiração
            )
            res.status(200).send({ msg: 'Login realizado.', token})
         } else {
            res.status(401).send({ msg: 'Senha/Login incorreto(s).'})
         }
      } else {
         res.status(400).send({ msg: 'Login de usuário não permitido.'})
      }
   })
})

server.put('/user/:id', (req, res) => {
   const { id } = req.params
   const { nameUser, loginUser, passwordUser } = req.body

   const checkIfLoginExist = `SELECT * FROM users WHERE loginUser = ?`
   const query = `UPDATE users SET nameUser = ?, loginUser = ?, passwordUser = ? WHERE idUser = ?`

   db.query(checkIfLoginExist, [loginUser], (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro, tente novamente mais tarde.'})
      } else if (JSON.parse(JSON.stringify(result)).length < 0) {  
         console.log(nameUser, loginUser, passwordUser)
         console.log(result)  
         res.status(400).send({ msg: 'Edição de dados não permitida.'})

      } else {
         const hashPassword = bcrypt.hashSync(passwordUser, 10)

         db.query(query, [nameUser, loginUser, hashPassword, id], (err, result) => {
            if(err) {
               console.log(err)
            } else {
               res.status(201).send({ msg: 'Usuário editado com sucesso.', result })
            }
         })
      }
   })
})

server.delete('/user/:id', (req, res) => {
   const { id } = req.params

   const checkIfUserExist = `SELECT * FROM users WHERE idUser = ?`
   const query = `DELETE FROM users WHERE idUser = ?`

   db.query(checkIfUserExist, [id], (err, result) => {
      console.log(JSON.parse(JSON.stringify(result)))
      if(err) {
         console.log(err)
         res.status(404).send({ msg: `Erro, tente novamente mais tarde.` })
      } else if(JSON.parse(JSON.stringify(result)).length > 0) {
         db.query(query, [id], (err, result) => {
            if(err) {
               console.log(err)
               res.status(404).send({ msg: 'Erro ao tentar excluir usuário.' })
            } else {
               res.status(200).send({ msg: `Usuário de ID ${id} excluído com sucesso.` })
            }
         })
      } else {
         res.status(401).send({ msg: `Erro ao tentar verificar se usuário de id ${id} existe.` })
      }
   })

})

// Manager Possible Client
server.get('/clients', (req, res) => {
   const query = `SELECT * FROM possibleClient`

   db.query(query, (err, result) => {
      if(err) {
         console.log(err)
         res.status(500).send({ msg: 'Errro!' })
      } else {
         res.status(200).send({ msg: 'Possiveis clientes encontrados.', result })
      }
   })
})

server.get('/client/:id', (req, res) => {
   const { id } = req.params
   const query = `SELECT * FROM possibleClient WHERE idPosClient = ?`

   db.query(query, [id] , (err, result) => {
      if(err) {
         console.log(err)
         res.status(500).send({ msg: 'Errro!' })
      } else if(JSON.parse(JSON.stringify(result)).length > 0) {
         res.status(200).send({ msg: 'Possível cliente encontrado.', result })
      } else {
         res.status(404).send({ msg: 'Errro ao tentar localizar possível cliente.' })
      }
   })
})

server.post('/client', (req, res) => {
   const { idExc, nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient } = req.body

   const query = `INSERT INTO possibleClient (idExc, nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient) VALUES (?, ?, ?, ?, ?, ?)`

   db.query(query, [idExc, nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient], (err, result) => {
      if(err) {
         console.log(err)
         res.status(400).send({ msg: 'Errro!' })
      } else {
         res.status(201).send({ msg: 'Dados do possível cliente salvo.' })
      }
   })
})

server.put('/client/:id', (req, res) => {
   const { id } = req.params
   const { nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient, contactedPosClient } = req.body

   const checkIfPosClientExist = `SELECT * FROM  possibleClient WHERE idPosClient = ?`

   const query = `UPDATE possibleClient SET nameExc = ?, namePosClient = ?, emailPosClient = ?, telPosClient = ?, instaPosClient = ?, contactedPosClient = ? WHERE idPosClient = ?`

   db.query(checkIfPosClientExist, [id], (err, result) => {
      if(err) {
         console.log(err)
         res.status(500).send({ msg: 'Errro!' })
      } else if(JSON.parse(JSON.stringify(result)).length = 1) {
         db.query(query, [nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient, contactedPosClient, id], (err, result) => {
            if(err) {
               console.log(err)
               res.status(500).send({ msg: 'Errro!' })
            } else {
               res.status(200).send({ msg: 'Dados do possível cliente editado com sucesso.' })
            }
         })
      } else {
         res.status(404).send({ msg: `Errro ao tentar localizar possível cliente para editar pelo id ${ id }.` })
      }
   })
})

server.delete('/client/:id', (req, res) => {
   const { id } = req.params

   const checkIfPosClientExist = `SELECT * FROM possibleClient WHERE idPosClient = ?`

   const query = `DELETE FROM possibleClient WHERE idPosClient = ?`

   db.query(checkIfPosClientExist, [id], (err, result) => {
      if(err) {
         console.log(err)
         res.status(500).send({ msg: 'Errro!' })
      } else if(JSON.parse(JSON.stringify(result)).length = 1) {
         db.query(query, [id], (err, result) => {
            if(err) {
               console.log(err)
               res.status(500).send({ msg: 'Errro!' })
            } else {
               res.status(200).send({ msg: 'Cliente deletado com sucesso.' })
            }
         })
      } else {
         res.status(404).send({ msg: `Errro ao tentar excluir cliente pelo id ${ id }.` })
      }
   })

})

server.listen(3002, () => console.log('Running on port 3002'))