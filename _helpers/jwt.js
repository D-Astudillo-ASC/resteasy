const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/templates/gettemplate',
            '/templates/savetemplate',
            '/templates/getresettemplate',
            '/templates/gettemplate2',
            '/templates/savetemplate2',
            '/templates/getresettemplate2',
            '/aws/signS3_get',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        console.log("user doesnt exist")
        return done(null, true);
    }

    done();
};
