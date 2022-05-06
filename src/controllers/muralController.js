
let fakelist = [
   {
      id: 1,
      titulo: "Jogar bola",
      description: "Sair de casa e ver o sol pra jogar uma bolinha e tomar uma cervejinha!"
   },
   {
      id: 2,
      title: "Jogar WOW",
      description: "Lutar pela Horda e destruição da Ally!"
   },
   {
      id: 3,
      titulo: "Um título",
      description: "Uma mensagem aleatória!!!"
   },
]

const muralController = {
   list(req, res) {
      res.status(200).json(fakelist);
   },
   newPost(req, res) {},
};

module.exports = muralController;
