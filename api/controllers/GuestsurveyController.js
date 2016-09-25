/**
 * GuestsurveyController
 *
 * @description :: Server-side logic for managing guestsurveys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.view(
			'GuestSurvey/index',
			{ errors: req.flash('error') });
	},

	survey2: function (req, res) {
		res.view(
			'GuestSurvey/survey2',
			{ errors: req.flash('error') });
	}
};
