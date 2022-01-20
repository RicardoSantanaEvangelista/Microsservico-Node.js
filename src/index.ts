import express, { Request, Response, NextFunction }  from "express";
import usersRoute from "./routes/users.route";

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// Configuração das rotas
app.use(usersRoute);

app.get("/status", (req: Request, res: Response , next: NextFunction) => {
    res.status(200).send( {foo: 'Hello World, Sucesso !'} );
});

// Configuração do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});