import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		var x;
		if(params.id){
		return this.get('store').find('contact', params.id);
	}
},
templateName:'add'
});
