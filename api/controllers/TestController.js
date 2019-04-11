

module.exports = {
    nome: async function(req,res){
      var usersF = await User.find({fullName:'Franco'});
          sails.log('Wow, there are %d users named Franco.', usersF.length);
      var R = req.body;
    return res.json(usersF);
  }


}
