const express = require("express");
const router = express.Router();

//const listaSeries = [];
const listaSeries = [
  {
    nome: "Modern Family",
    descricao:
      "Esta série vencedora do Emmy acompanha a vida de Jay Pritchett e sua eclética família enquanto lidam com os desafios da vida contemporânea em Los Angeles.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9hgDFB7fargpetc6FGY4R-inX1PHYCQ_6g&usqp=CAU",
    ano: 2009,
  },
  {
    nome: "La Casa de Papel",
    descricao:
      "Nove habilidosos ladrões (Nairóbi, Berlim, Tókyo, Rio, Helsinki, Oslo, Professor, Denver e Moscou) se trancam na Casa da Moeda da Espanha, com o ambicioso plano de realizar o maior roubo da história.",
    imagem: "https://br.web.img3.acsta.net/pictures/20/04/07/19/29/2754760.jpg",
    ano: 2017,
  },
  {
    nome: "The Witcher",
    descricao:
      "Geralt de Rivia é um solitário caçador de monstros, que luta para encontrar seu lugar num mundo onde pessoas são mais crueis que criaturas.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbDd58EKcjio63DEmy-zpHkuQ91Fdvv0STw&usqp=CAU",
    ano: 2019,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Séries ok" });
});

router.get("/listar", (req, res) => {
  res.status(200).json(listaSeries);
});

router.get("/listar/:id", (req, res) => {
  const id = req.params.id;
  const serie = listaSeries[id];

  if (!serie) {
    res.status("404").json(`Série ID ${id} não existe`);
    return;
  }

  res.status(200).json({ serie });
});

router.post("/", (req, res) => {
  const serie = req.body;

  if (!serie.nome) {
    res.status(400).json({ message: "Nome na requisição está vazio!" });
    return;
  }
  if (!serie.descricao) {
    res.status(400).json({ message: "Descrição na requisição está vazio!" });
    return;
  }
  if (!serie.imagem) {
    res.status(400).json({ message: "Imagem na requisição está vazio!" });
    return;
  }
  if (!serie.ano) {
    res.status(400).json({ message: "Ano na requisição está vazio!" });
    return;
  }

  listaSeries.push(serie);
  res.status(201).json({ message: "Cadastrado com sucesso" });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const serie = listaSeries[id];

  if (!serie) {
    res.status("404").json(`Série ID ${id} não existe`);
    return;
  }

  listaSeries[id] = req.body;

  res.status(200).json(listaSeries[id]);
});

router.delete("/deletar/:id", (req, res) => {
  const id = req.params.id;
  const serie = listaSeries[id];

  if (!serie) {
    res.status("404").json(`Série ID ${id} não existe`);
    return;
  }

  listaSeries.splice(id, 1);
  res.status(200).json({ message: "Registro Deletado", listaSeries });
});

module.exports = router;
