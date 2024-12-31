import express, { Request, Response} from 'express'
import { config } from 'dotenv'
import path from 'path'
// import {readFileSync} from 'fs'
import { randomUUID } from 'crypto'
import dbJson from './server.json' 
import { writeFileSync } from 'fs'
import { userRoutes } from './routes/UserRoutes'
import cors from 'cors'

type User = {
    id: string
    name: string
    age: number
}

// interface ICreateUserDTO {
//     name: string
//     age: string
// }

type CreateUserDTO = Omit<User, "id"> //Serve apenas para omitir o id do meu usuário.

config()
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const dbJsonPath = path.resolve(process.cwd(), 'server.json')

const users = dbJson.users
//Criando a constante acima, consigo o acesso ao servidor com os dados de usuários e outros.
// const users: User[] = [
//     {
//         id: randomUUID(),
//         name: 'Fulano',
//         age: 20
//     },
//     {
//         id: randomUUID(),
//         name: 'Ciclano',
//         age: 10 
//     },
// ]

app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})

app.use(userRoutes)

app.get('/api', (req: Request, res: Response) => {
    res.send('<h1 style="color: red;">Api Base Url</h1>')
})

app.get('/api/users', (req: Request, res: Response) => {
    res.send(users)
})

app.post('/api/users', (req: Request, res: Response) => {
    const {name, age}: CreateUserDTO = req.body

    if (!name || age < 0) {
        const errorMessage = 'O usuário a ser criado precisa de nome e idade'
        res.status(400).send(errorMessage)
    }

    const user = { id: randomUUID(), name, age }

    users.push(user)

    writeFileSync(dbJsonPath, JSON.stringify(users))

    res.status(201).json(user)
})

app.put('/api/users', (req: Request, res: Response) => {
    res.send(users)
})

app.delete('/api/users/:id', (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
        const errorMessage = 'O usuário a ser deletado precisa de um id'
        res.status(400).send(errorMessage)
    }

    const foundUser = users.find(user => user.id === id)

    if (!foundUser) {
        const errorMessage = `Usuário com id ${id} não foi encontrado`
        res.status(400).send(errorMessage)
    }

    const updateUsers = users.filter(user => user.id !== id)

    writeFileSync(dbJsonPath, JSON.stringify(updateUsers))

    res.status(204).json()
})
