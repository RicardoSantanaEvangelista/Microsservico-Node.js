import express from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
import errorHandler from "./middlewares/error-handdler.middleware";
import authorizationRouter from "./routes/authorization.route";
import bearerAuthenticationMiddleware from "./middlewares/bearer-authentication-middleware";


const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// Configuração das rotas
app.use(statusRoute);
app.use(authorizationRouter);

app.use(bearerAuthenticationMiddleware);
app.use(usersRoute);


// Configuração dos Handlers de Erro
app.use(errorHandler);

// Configuração do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});