/**
 * PlanningController
 *
 * @description :: Server-side logic for managing Plannings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.view(
			'Planning/index',
			{ errors: req.flash('error') });
	},
	page2: function (req, res) {
		res.view(
			'Planning/page2',
			{ errors: req.flash('error') });
	},
};
