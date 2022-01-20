import express from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// Configuração das rotas
app.use(usersRoute);
app.use(statusRoute);


// Configuração do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});