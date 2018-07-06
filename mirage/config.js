export default function() {
  this.namespace = '/contactmanagement'; 
  this.get('/contacts');

  /*
    Shorthand cheatsheet:

    this.get('/posts');cm
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    
  */
  this.get('/contacts/:id');
  this.del('/contacts/:id');
  this.put('/contacts/:id');
  this.post('/contacts');
}
