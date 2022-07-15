const figlet = require('figlet')

figlet('I am awesome', (err, data) => {
    if (err) {
        console.log('Error');
        console.dir(err);
        return;
    }
    console.log(data)
})
