var ctrl = {};
ctrl.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

module.exports = ctrl;
