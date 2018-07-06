import { Factory } from 'ember-cli-mirage';
import Mirage,{ faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	name() { return faker.name.findName(); },
	dob:faker.date.past,
	phone:faker.phone.phoneNumber,
	email:faker.internet.email,
	college:faker.company.companyName
});
