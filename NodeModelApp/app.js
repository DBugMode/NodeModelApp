console.log('Hello world');

var user = require('./Schema/User.js');

var newUser = user({
    name: 'Chris',
    age: 35,
    address: {
        street: '54 Mango Street',
        city: 'Boston',
        state: 'MA',
        zip: '01233'
    },
    income: 98444.34
    
});

newuser.save(function (err){
    if (err) throw err;
    console.log('Data Saved');
})

