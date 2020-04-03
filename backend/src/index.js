const express = require('express');
const cors = require('./cors');
const routes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP  
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informaçãop no back-end
 * DELETE: Deletar uma informação no banck-end
 */

 /**
  * Tipos de parametros
  * Query Params: Paramêtros nomeados/enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parametrôs utilizados para identificar recursos
  */



app.listen(3333);