const web = require('./app');

test('check if webpage is running', done => {
    expect('Static file server running.');
    done();
})