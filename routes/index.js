var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'TVR' });
});

/* GET home page. */
router.get('/overlays/smashchateau/game4by3', function(req, res) {
  res.render('overlays/smashchateau/game', { title: 'Smash Chateau Overlay', layout: false });
});

router.get('/overlays/smashchateau/all4by3', function(req, res) {
  res.render('overlays/smashchateau/all4by3', { title: 'Smash Chateau Overlay', layout: false });
});

/* GET home page. */
router.get('/overlays/admin', function(req, res) {
  res.render('overlays/admin', { title: 'Overlay Admin' });
});

/* GET home page. */
router.get('/overlays/scores', function(req, res) {
  res.render('overlays/scores', { title: 'Scores' });
});

/* GET home page. */
router.get('/overlays/grimetime/game4by3', function(req, res) {
  res.render('overlays/grimetime/game4by3', { title: 'Overlay', layout: false });
});

/* GET home page. */
router.get('/overlays/grimetime/all4by3', function(req, res) {
  res.render('overlays/grimetime/all4by3', { title: 'Overlay', layout: false });
});

/* GET home page. */
router.get('/overlays/grimetime/game16by9', function(req, res) {
  res.render('overlays/grimetime/game16by9', { title: 'Overlay', layout: false });
});

/*UMSK*/
router.get('/overlays/umsk/game16by9', function(req, res) {
  res.render('overlays/umsk/game16by9', { title: 'UMSK Overlay', layout: false });
});

router.get('/overlays/umsk/game4by3', function(req, res) {
  res.render('overlays/umsk/game4by3', { title: 'UMSK Overlay', layout: false });
});

router.get('/overlays/umsk/all16by9', function(req, res) {
  res.render('overlays/umsk/all16by9', { title: 'UMSK Overlay', layout: false });
});

router.get('/overlays/umsk/all4by3', function(req, res) {
  res.render('overlays/umsk/all4by3', { title: 'UMSK Overlay', layout: false });
});

/*Roll Tier V*/
router.get('/overlays/rolltierv/game4by3', function(req, res) {
  res.render('overlays/rolltierv/game4by3', { title: 'Roll Tier V Overlay', layout: false });
});

router.get('/overlays/rolltierv/all4by3', function(req, res) {
  res.render('overlays/rolltierv/all4by3', { title: 'Roll Tier V Overlay', layout: false });
});

/* GET commentators. */
router.get('/overlays/commentators', function(req, res) {
  res.render('overlays/commentators', { title: 'Overlay', layout: false });
});

/* GET readyStatus page. */
router.get('/overlays/readyStatus', function(req, res) {
  res.render('overlays/readyStatus', { title: 'Ready Status', layout: false });
});

/* GET idle page. */
router.get('/overlays/idle', function(req, res) {
  res.render('overlays/idle', { title: 'We will be right back!', layout: false });
});

/* GET bracket page. */
router.get('/overlays/bracket', function(req, res) {
  res.render('overlays/bracket', { title: 'Bracket - Powered by Challonge', layout: false });
});

/* GET pardon the smash. */
router.get('/overlays/pardonthesmash', function(req, res) {
  res.render('overlays/pardonthesmash/overlay', { title: 'PTS Overlay', layout: false });
});

/* GET pardon the smash admin. */
router.get('/overlays/pardonthesmash/admin', function(req, res) {
  res.render('overlays/pardonthesmash/admin', { title: 'PTS Admin' });
});

/* GET pardon the smash. */
router.get('/overlays/pardonthesmash/guest', function(req, res) {
  res.render('overlays/pardonthesmash/guest', { title: 'PTS Guest' });
});

/* GET velvet arcade */
router.get('/overlays/arcade', function(req, res) {
  res.render('overlays/arcade/overlay', { title: 'The Velvet Arcade', layout: false });
});

/* GET velvet arcade admin */
router.get('/overlays/arcade/admin', function(req, res) {
  res.render('overlays/arcade/admin', { title: 'Velvet Arcade Admin' });
});

module.exports = router;
