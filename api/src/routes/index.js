const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country=require('./CountryRoutes.js')
const activity=require('./ActivityRoutes.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/country',country)
 router.use('/activity',activity)

module.exports = router;
