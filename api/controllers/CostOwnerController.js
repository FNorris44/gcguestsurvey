/**
 * CostOwnerController
 *
 * @description :: Server-side logic for managing Costowners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.view(
			'CostOwner/index',
			{ errors: req.flash('error') });
	},

	survey2: function (req, res) {
		res.view(
			'CostOwner/CO2',
			{ errors: req.flash('error') });
	}
};
