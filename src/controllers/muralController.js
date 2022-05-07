const { uid } = require("uid");

let fakelist = [
   {
      id: 1,
      titulo: "Jogar bola",
      description:
         "Sair de casa e ver o sol pra jogar uma bolinha e tomar uma cervejinha!",
   },
   {
      id: 2,
      title: "Jogar WOW",
      description: "Lutar pela Horda e destruição da Ally!",
   },
];

const muralController = {
   list(req, res) {
      res.status(200).json(fakelist);
   },

   newPost(req, res) {
      const { title, description } = req.body;
      const id = uid(24);

      fakelist.push({id, title, description});

      res.status(201).json(fakelist);
   },
};

module.exports = muralController;
