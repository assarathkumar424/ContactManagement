import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		changedata(id){
				this.transitionToRoute('contact',id);
		}
}
});