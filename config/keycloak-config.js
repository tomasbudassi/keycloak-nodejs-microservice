const session = require('express-session')
const Keycloak = require('keycloak-connect')

let _keycloak

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: '22e5393f-1569-45ea-8218-3ffe86bda1fb'
    }
};

function initKeycloak() {
    if(_keycloak) {
        console.warn('Trying to init Keycloak again!');
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({store: memoryStore}, keycloakConfig);
        return _keycloak;
    }
};

function getKeycloak() {
    if(!_keycloak) {
        console.error('Keycloak has not benn initialized. Please called init first.');
    }
    return _keycloak;
};

module.exports = {
    initKeycloak,
    getKeycloak
};