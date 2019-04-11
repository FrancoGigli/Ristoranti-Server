/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    artista: {
      type: 'string',
      required: true
    },
    luogo: {
      type: 'string',
      required: true,
    },
    data: {
      type: 'ref',
      columnType:'DateTime',
      required: true,
    },
    prezzo: {
      type: 'number',
      required: true
    },
    compagnia: {
      type: 'string'
    }
  }

};
