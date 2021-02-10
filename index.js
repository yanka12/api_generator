require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 4040;

const router = require('./app/router');

// ce MW informe notre app qu'on communiquera avec elle en JSON
// il transforme le payload de toutes les requêtes (qui n'est qu'une string à la base)
// en un objet utilisable dans les MW suivants, via request.body
app.use(express.json());

app.use(router);










app.listen(port, () => console.log(`Listening on port=${port}`));