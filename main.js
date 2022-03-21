var passphrasegen  = require('./passphrasegen.js')
var keygeneration = require('./keygeneration.js');



const passphraseresult = passphrasegen.createpassphrase();
console.log(`The passphrase is: ${passphraseresult}`);


const key  = keygeneration.createkey(passphraseresult);

const publickey = key[0]
const privatekey = key[1]

console.log(`The public key is: ${publickey}`);
console.log(`The private key is: ${privatekey}`);