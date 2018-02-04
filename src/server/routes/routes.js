const controller = require('../controllers');

const router = require('express').Router();
const bodyparser = require('body-parser');

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

// Return All Place List
router.get('/api/allplaces', controller.allplaces.get);

// Return My Place List
router.get('/api/myplaces/', controller.myplaces.get);

// Create User
router.post('/api/usercreate', controller.usercreate.post);

// Create new Post
router.post('/api/create', controller.create.post);


module.exports = router;
