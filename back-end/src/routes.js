var express = require('express');
const OngController=require('./controllers/OngsController');
const IncidentsController=require('./controllers/IncidentsController');
const ProfileController=require('./controllers/ProfileController');
const SessionController=require('./controllers/SessionController');

var router = express.Router();
router.use(express.json());

router.post('/sessions',SessionController.create);

router.get('/ongs',OngController.index);
router.post('/ongs', OngController.create);


router.get('/incidents',IncidentsController.index);
router.post('/incidents', IncidentsController.create);
router.delete('/incidents/:id', IncidentsController.delete);

router.get('/profile', ProfileController.index);

router.get('/another/route', function(req, res, next) {
  res.json({ hello: 'world' });
});

module.exports = router;