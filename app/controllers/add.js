import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		changedata(){
		var idno;
		const data=this.get('model');
		let y=this.get('store').findAll('contact').then(response => {
			return response.get('length');
		}).then(response =>{
			var x=response+1;
			dat.id=x;
			this.get('store').createRecord('contact',data).save();
			return x;
		}).then(response =>{
			this.transitionToRoute('contact',response);
		});
			
		}
	}
});
