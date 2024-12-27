type Product = {
    name: string
    amountInStock: number
    unitValue: number
}

const product1: Product = {
    name: 'Pair of Socks',
    amountInStock: 1000,
    unitValue: 10,
}

const product2: Product = {
    name: 'T-Shirt',
    amountInStock: 500,
    unitValue: 60,
}

import fs from "node:fs"
import path from "node:path"

const productJson = JSON.stringify([
    {
        name: 'Pair of Socks',
        amountInStock: 1000,
        unitValue: 10,
    },

    {
        name: 'T-Shirt',
        amountInStock: 500,
        unitValue: 60,
    }
], null, 2)

const products = JSON.parse(productJson)
const fileOutPath = path.join(__dirname, 'generated-products.json')

fs.writeFileSync(fileOutPath, productJson) //criou o novo generated-products em formato json
console.log(products)