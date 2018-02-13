// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// module.exports = {
//     networks: {
//         development: {
//             host: '127.0.0.1',
//             port: 8545,
//             network_id: '*', // Match any network id
//             gas: 6721975,
//             gasPrice: 18000000000
//         }
//     }
// }
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            gas: 6712388,
            gasPrice: 65000000000,
            network_id: "*" // Match any network id
        }
    }
};