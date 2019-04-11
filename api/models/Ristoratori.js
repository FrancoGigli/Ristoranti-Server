var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    nome: {
      type: 'string',
      required: true
    },
    cognome: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    company: {
      type: 'string',
      required: false
    },

/*
  toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  */
  },
  beforeCreate: function(organizzatore, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(organizzatore.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          organizzatore.password = hash;
          cb();
        }
      });
    });
  }
};
