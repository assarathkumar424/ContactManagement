import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return {id:null};
	},
	setupController(controller, model) {
		this._super(...arguments);
  }
});
