const app = require('./app')

const port = process.env.Port || 4000

app.listen(port, () => {
    console.log(`server connecter sur le port ${port}`);
})

