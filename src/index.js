import express from 'express';
import ejs from 'ejs';
import path, {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/router.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));


app.set('views', join(__dirname,'views'));
const stylesPath = path.join(__dirname,'views','style');
const jsPath = path.join(__dirname,'views','js');
const imagenesPath = path.join(__dirname,'views','imagenes');
const imagenesAutosPath = path.join(__dirname,'views','imagenes','autos');
const imagenesIconosPath = path.join(__dirname,'views','imagenes','icono');


app.set('view engine','ejs');
app.use(indexRoutes);
app.use(express.static(stylesPath));
app.use(express.static(jsPath));
app.use(express.static(imagenesPath));
app.use(express.static(imagenesAutosPath));
app.use(express.static(imagenesIconosPath));



const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});