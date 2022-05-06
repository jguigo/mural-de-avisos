const PORT = 4000;
const express = require('express');
const Router = require('./routes');

const app = express();
app.use(express.json());
app.use(Router);
app.listen(PORT, () => console.log("Servidor ON na porta", PORT));