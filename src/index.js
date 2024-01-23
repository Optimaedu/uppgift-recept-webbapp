import express from 'express'
import recipes from './data/recipes.json' assert { type: 'json' }

const host = 'localhost'
const port = 3000

const app = express()
app.use(express.static('public'))

app.get('/api/recipes', (request, response) => {
  response.send('...')
})

app.get('/api/recipes/:id', (request, response) => {
  response.send('...')
})

app.get('/recipes/:id', (request, response) => {
  response.send('...')
})

app.listen(port, err => {
  if(err) {
    throw err
  }
  console.log('Server running on: http://' + host +':' + port)
})