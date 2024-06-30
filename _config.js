const config = {
    mongoURI: {
        production: process.env.MONGO_URI_PRODUCTION,
        development: process.env.MONGO_URI_DEVELOPMENT,
        test: process.env.MONGO_URI_TEST
    }
};

const currentEnv = process.env.NODE_ENV || 'development';
const mongoURI = config.mongoURI[currentEnv];

module.exports = { mongoURI };
