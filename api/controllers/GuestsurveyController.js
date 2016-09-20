/**
 * GuestsurveyController
 *
 * @description :: Server-side logic for managing guestsurveys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	Survey: function (req, res) {
		res.view(null, {
				title: 'Survey'
		});
},

};
