var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = [
    {
      id: 1,
      name: 'Екатерина',
      profession: 'Web-дизайнер'
    },
    {
      id: 2,
      name: 'Денис',
      profession: 'Web-разработчик'
    },
    {
      id: 3,
      name: 'Татьяна',
      profession: 'Менеджер'
    }
  ]
    

  res.send(users);
});

module.exports = router;
