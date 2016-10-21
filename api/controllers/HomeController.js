/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    res.view(
			'Home/index',
      { errors: req.flash('error') });
  },

	SurveyHome: function (req, res) {
    res.view(
			'Home/SurveyHome',
      { errors: req.flash('error') });
  },
};
