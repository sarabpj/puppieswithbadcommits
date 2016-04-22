var express = require("express");
var router = express.Router();
var knex = require("../db/knex");

// Index
router.get('/', function(req, res){
  knex('puppies').then(function(puppy){
    res.render('puppies/index', {puppies: puppy});
  });
});

// New
router.get('/new', function(req, res){
  res.render("puppies/new");
});

// Create
router.post('/', function(req, res) {
  knex('puppies').insert(req.body.puppy).then(function(){
    res.redirect('/puppies');
  });
});

// Show
router.get('/:id', function(req, res) {
  knex('puppies').where({id: req.params.id}).first().then(function(puppy){
      res.render('puppies/show', {puppy:puppy});
  });
});

// Edit
router.get('/:id/edit', function(req, res) {
  knex('puppies').where({id: req.params.id}).first().then(function(puppy){
    res.render('puppies/edit', {puppy: puppy});
  });
});

// Update
router.put('/:id', function(req, res) {
  knex('puppies').where({id: req.params.id}).update(req.body.puppy).then(function(){
      res.redirect('/puppies');
  });
});

// Destroy
router.delete('/:id', function(req, res) {
  knex('puppies').where({id: req.params.id}).del().then(function(){
      res.redirect('/puppies');
  });
});

module.exports = router;