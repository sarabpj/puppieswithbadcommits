exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('puppies').del(),
    knex('puppies').insert({id: 1, name: 'spot', breed: "lab"}),
    knex('puppies').insert({id: 2, name: 'pup', breed: "boxer"}),
    knex('puppies').insert({id: 3, name: 'fido', breed: "pug"}),
  ]);
};
