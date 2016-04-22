exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('puppies').del(),
    knex('puppies').insert({id: 1, name: 'spot', age: 2}),
    knex('puppies').insert({id: 2, name: 'pup', age: 3}),
    knex('puppies').insert({id: 3, name: 'fido', age: 4}),
  ]);
};
