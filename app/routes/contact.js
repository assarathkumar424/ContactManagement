import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.get('store').find('contact', params.id);
	},
	setupController(controller, model) {
		this._super(...arguments);
  }
});
