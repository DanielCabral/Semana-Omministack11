const express=require('express');
const routes=require('./routes.js');
const cors=require('cors');

const app=express();

app.use(cors());

app.use(express.json());
app.use(routes);


/* 
* Rota / Recurso

Get: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletear uma informação no back-end


*/

/*
Tipos de Parametros
----------------------
Query: Parametros nomeados enviado na rota após o simbolo de interrogação
Filtros, paginação

Route Paramns: Usados para identificar recursos
Request body: Corpo da requisição. Utilizado para criar ou alterar recursos.
*/

/*
Driver: 
Query builder: 
*/


app.listen(3335);