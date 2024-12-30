import express, { Request, Response} from 'express'
import { config } from 'dotenv'
import path from 'path'
// import {readFileSync} from 'fs'

interface IUser {
    name: string
    age: number
}

//Quando importa express e cria uma instância do aplicativo, como const app = express(), também precisa definir rotas e suas funções de tratamento. Essas funções geralmente aceitam dois parâmetros: request e response. Importar Request e Response garante que esses parâmetros sejam corretamente tipados.

config()
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const users: IUser[] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 10 
    },
]

app.get('/api', (req: Request, res: Response) => {
    //O send pode ser para enviar vários formatos diferentes: objetos, arquivos, html, status, etc.

    // const HomePagePath = path.join(__dirname, 'home.html')
    // const homePage = readFileSync(HomePagePath)
    // res.status(200).send(homePage)

    res.send('<h1 style="color: red;">Hello World</h1>')
})

app.get('/api/users', (req: Request, res: Response) => {
    res.send(users)//poderia ser um res.json também
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})