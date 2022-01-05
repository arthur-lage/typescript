import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(3001, () => console.log("Running on PORT 3001"))