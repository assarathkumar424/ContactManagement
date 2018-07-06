import Controller from '@ember/controller';

export default Controller.extend({
	id:null,
	actions:{
		getone(id){
			this.transitionToRoute('contact',id);
		}
	}
});
