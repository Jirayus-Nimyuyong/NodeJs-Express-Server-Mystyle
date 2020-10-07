import express from 'express'
import config from 'config'
import notifier from 'node-notifier'

const PORT = config.get('app.port') || 5000

const app = express()

app.get('/author', (req, res) => res.send(`Server Running By ${config.get('author.dev')}`))

app.listen(PORT, () => {
  try {
    console.log(`Server Startd on Port ${PORT}`)
    notifier.notify({
      title: 'Server',
      message: `Server Run on ${PORT}`,
      sound: true
    })
  } catch (error) {
    console.error(error)
    notifier.notify({
      title: 'Server',
      message: 'Server Error',
      sound: true
    })
  }
})
