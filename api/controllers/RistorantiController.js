/**
 * RistorantiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get: function (req, res)
    {
        //        var Rnome=req.param('nome');
        Ristoranti.find()
          .exec(function (err, rist) {
              if (err) {
                  return res.json(err);
              }
              return res.json(rist);
              //         return res.json('BRAVOOOOOOOOOOOOOOOOOOO');
          })
    },
//----------------------------------------------------------------------------
        get_by_Nome: async function(req,res){
            var NomeRis = req.param('Nome');
            console.log(NomeRis);
            Ristoranti.findOne({Nome: NomeRis})
            .exec(function (err, rist) {
                if (err) {
                    return res.json(err);
                }
                console.log(rist);
                return res.json(rist);
            })
        }
    };
