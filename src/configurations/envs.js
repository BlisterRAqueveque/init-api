// <=== IMPORTAMOS LAS LIBRERÍAS ===>
import joi from 'joi';
import dotenv from 'dotenv';

// <=== TRAEMOS LAS VARIABLES DE ENTORNO USANDO "dotenv" ===>
dotenv.config();

//! CREAMOS EL ESQUEMA DE JOI
const envSchema = joi
  .object({
    //> VAMOS VALIDANDO LAS VARIABLES QUE VAN A COEXISTIR EN NUESTRO PROYECTO
    PORT: joi.number().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DATABASE: joi.string().required(),
    //> LAS MISMAS SON LAS QUE COLOCAMOS EN EL ARCHIVO ".env"
  })
  .unknown(true); //> PERMITIMOS QUE TRAIGAN TODAS LAS VARIABLES, INCLUSO LAS QUE NO ESTÁN EN EL ESQUEMA

// <=== VALIDAMOS QUE ESTE TODO CORRECTAMENTE ===>
const { value: envVars, error } = envSchema.validate(process.env);

//! SI EXISTE UN ERROR, QUE LO LANCE ANTES DE QUE SE LEVANTE EL SERVIDOR
if (error) throw new Error(`Config validation error: ${error.message}`);

//> POR ÚLTIMO, LAS EXPORTAMOS, PARA QUE SEAN VISIBLES EN TODO EL PROYECTO DONDE LAS NECESITE LLAMAR
export const envs = {
  PORT: envVars.PORT,
  DB_USER: envVars.DB_USER,
  DB_PASSWORD: envVars.DB_PASSWORD,
  DATABASE: envVars.DATABASE,
};
