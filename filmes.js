const express = require("express");
const router = express.Router();

//const listaFilmes = [];
const listaFilmes = [
  {
    nome: "Capitão América - O Primeiro Vingador",
    descricao:
      "Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano.",
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/62/19874544.jpg",
    ano: 2011,
  },
  {
    nome: "Capitão América 2 - O Soldado Invernal",
    descricao:
      "Dois anos após os acontecimentos em Nova York, Steve Rogers continua seu dedicado trabalho com a agência S.H.I.E.L.D..",
    imagem:
      "https://br.web.img2.acsta.net/c_310_420/pictures/14/02/03/20/36/257136.jpg",
    ano: 2014,
  },
  {
    nome: "Capitão América - Guerra Civil",
    descricao:
      "O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis.Tal decisão coloca o Capitão América em colisão com o Homem de Ferro.",
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/pictures/16/03/10/20/36/363874.jpg",
    ano: 2016,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Filmes ok" });
});

router.get("/listar", (req, res) => {
  res.status(200).json(listaFilmes);
});

router.get("/listar/:id", (req, res) => {
  const id = req.params.id;
  const filme = listaFilmes[id];

  if (!filme) {
    res.status("404").json(`Filme ID ${id} não existe`);
    return;
  }

  res.status(200).json({ filme });
});

router.post("/", (req, res) => {
  const filme = req.body;

  if (!filme.nome) {
    res.status(400).json({ message: "Nome na requisição está vazio!" });
    return;
  }
  if (!filme.descricao) {
    res.status(400).json({ message: "Descrição na requisição está vazio!" });
    return;
  }
  if (!filme.imagem) {
    res.status(400).json({ message: "Imagem na requisição está vazio!" });
    return;
  }
  if (!filme.ano) {
    res.status(400).json({ message: "Ano na requisição está vazio!" });
    return;
  }

  listaFilmes.push(filme);
  res.status(201).json({ message: "Cadastrado com sucesso" });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const filme = listaFilmes[id];

  if (!filme) {
    res.status("404").json(`Filme ID ${id} não existe`);
    return;
  }

  listaFilmes[id] = req.body;

  res.status(200).json(listaFilmes[id]);
});

router.delete("/deletar/:id", (req, res) => {
  const id = req.params.id;
  const filme = listaFilmes[id];

  if (!filme) {
    res.status("404").json(`Filme ID ${id} não existe`);
    return;
  }

  listaFilmes.splice(id, 1);
  res.status(200).json({ message: "Registro Deletado", listaFilmes });
});

module.exports = router;
