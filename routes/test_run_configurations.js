var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:testRunConfigurationId', function(req, res) {
  var testRunConfigurationId = req.params.testRunConfigurationId;
  res.render('TestRunConfiguration.html', { title: 'Test Run Configuration', testRunId :testRunConfigurationId });
});

/* GET home page. */
router.get('/details/:testRunConfigurationId', function(req, res) {
  var testRunConfigurationId = req.params.testRunConfigurationId;
  res.send("{}");
});

module.exports = router;
