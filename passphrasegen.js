function createpassphrase() {
    const { generate } = require('generate-passphrase')

    const Passphrase = generate({ length: 12, separator: ' ', uppercase: true, numbers: false  }) 

    return Passphrase
  }
  
  
  module.exports = { createpassphrase };