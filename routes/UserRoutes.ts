import { Router } from "express"
import express, { Request, Response} from 'express'
import { config } from 'dotenv'
import path from 'path'
import { randomUUID } from 'crypto'
import dbJson from '../server.json' 
import { writeFileSync } from 'fs'

type User = {
    id: string
    name: string
    age: number
}

// interface ICreateUserDTO {
//     name: string
//     age: string
// }

type CreateUserDTO = Omit<User, "id"> 

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const users = dbJson.users
const userRoutes = Router()

userRoutes.get('/api', (req: Request, res: Response) => {
    res.send('<h1 style="color: red;">Api Base Url</h1>')
})

userRoutes.get('/api/users', (req: Request, res: Response) => {
    res.send(users)
})

userRoutes.post('/api/users', (req: Request, res: Response) => {
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

userRoutes.put('/api/users', (req: Request, res: Response) => {
    res.send(users)
})

userRoutes.delete('/api/users/:id', (req: Request, res: Response) => {
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

export{userRoutes}