import express from 'express';
import { envs } from './configurations/envs.js';

const app = express();

//> AHORA IMPORTAMOS EL "envs", Y TRAEMOS LA PROPIEDAD "PORT"
app.set('port', envs.PORT);

export default app;
