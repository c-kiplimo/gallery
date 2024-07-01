<<<<<<< HEAD
const config = {
    mongoURI: {
        production: 'mongodb+srv://ckiplimo54:Ngetich1234@gallery.bn3rhdm.mongodb.net/darkroom?retryWrites=true&w=majority',
        development: 'mongodb+srv://ckiplimo54:Ngetich1234@gallery.bn3rhdm.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
        test: 'mongodb+srv://ckiplimo54:Ngetich1234@gallery.bn3rhdm.mongodb.net/darkroom-test?retryWrites=true&w=majority'
    }
};

=======
var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
>>>>>>> test
module.exports = config;
