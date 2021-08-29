//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const home = require("./routes/home")
const path = require("path")

//const mongoose = required("mongoose")
//var hbs = handlebars.create({ defaultLayout: 'main' });


//Configurações
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Handlebars
    //app.engine('handlebars', hbs.engine);
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');


    //Moongoose
    // mongoose.connect("mongodb+srv://lericia:<16061995>@cluster0.ithki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    //     console.log("Conectado ao mongo")
    // }).catch((err) =>{
    //     console.log("Erro ao se conectar")
    // })
   

    //Public
    app.use(express.static(path.join(__dirname,"public")))
    console.log(__dirname)

//Rotas

app.use('/home', home)



//Outros
const PORT = 5000
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})

