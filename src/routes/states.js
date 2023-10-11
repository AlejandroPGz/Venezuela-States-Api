const { Router } = require('express');
const router = Router();
const states = require('../baseDatosStates.json');
router.get('/', (req, res) => {
    res.send(states)
})

module.exports = router;