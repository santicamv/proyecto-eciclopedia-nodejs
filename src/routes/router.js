import { Router } from "express";

const router = Router();

router.get("/", (req,res) =>{
    res.render('index.ejs',
    {title : 'Enciclopedia de vehiculos',
    logo : 'acura_logo.png',
});
});

router.get("/creador.ejs", (req,res) =>{
    res.render('creador.ejs');
});


/* router.get('/', (req,res) =>{
    res.render('marca.ejs');
}); */

export default router;