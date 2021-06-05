const express = require(`express`);
const app = express();

 app.use(express.urlencoded({extended: true}));

app.get(`/`, (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Olá</button>
    </form>
    `)
}); 

app.get(`teste/:idUsuarios?/:parametro?`, (req, res) => {
    console.log(req, parans);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})
app.post('/', (req, res) => {
    res.send(`Recebi o formulário`)
})
app.get(`/contato`, (req, res) => {
    res.send(`Obrigado por entrar em contato com a gente!`)
}); 

app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`)
    console.log(`servidor executando na porta 3000`)
})