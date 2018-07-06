import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	dob:DS.attr('string'),
	phone:DS.attr('string'),
	email:DS.attr('string'),
	college:DS.attr('string')
});
