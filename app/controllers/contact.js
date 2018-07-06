import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		deleted(id){
			this.get('store').findRecord('contact',id).then(function(contact){
				contact.destroyRecord();
			});
			this.transitionToRoute('contacts');
		},
		update(id){
			this.transitionToRoute('update',id);
		}
	}
});
