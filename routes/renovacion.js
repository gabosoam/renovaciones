var express = require('express');
var router = express.Router();
var renovacion = require('../model/renovacion');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/read', function(req, res, next) {
	var id = req.query.data;
	renovacion.read(id,function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	})
})

router.get('/read/:id', function(req, res, next) {
	var id = req.params.id;
renovacion.readOne(id,function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	})
});

router.post('/create', function(req, res, next) {
	var data= req.body;

	renovacion.create(data,function(err, result) {
		if (err) {
			res.send(err)
		} else {
			if (result.rowCount>0) {
				res.send(true);
			} else {
				res.send(false);
			}
			
		}
	});
})



module.exports = router;
