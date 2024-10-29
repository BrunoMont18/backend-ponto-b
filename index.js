let express = require ('express')
let app = express ();

app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");
});

app.post('/rotapost')

app.listen(3000, () => {

    console.log("Servidor aguardando requisições")
});

