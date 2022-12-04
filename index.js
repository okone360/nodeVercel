const server = require('./server')

const port = process.env.Port || 4000

server.listen(port, () => {
    console.log(`server connecter sur le port ${port}`);
})

