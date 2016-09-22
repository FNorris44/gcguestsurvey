/**
 * PlanningController
 *
 * @description :: Server-side logic for managing Plannings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.view(null, {
				title: 'Planning'
		});
	},
	page2: function (req, res) {
		res.view(null, {
				title: 'Questionnare'
		});
	},
};
