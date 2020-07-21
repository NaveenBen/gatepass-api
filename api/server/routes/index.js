const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
router.get("/",(req,res)=>{
    res.send({message : "welcome to api"});
})
router.get('/users',controllers.getAllUsers);
router.get('/roles',controllers.getAllroles);
router.post('/users',controllers.addUser);
router.put('/users',controllers.updateUser);
router.delete('/users',controllers.deleteUser);

module.exports = router;