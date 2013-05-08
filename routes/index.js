
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', socketurl: req.protocol + "://" + req.get('host') });
};

exports.receiver = function(req, res){
  res.render('receiver', { title: '呼び出し中', socketurl: req.protocol + "://" + req.get('host') });
};
