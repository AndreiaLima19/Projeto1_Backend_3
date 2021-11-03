const express = require("express");
const router = express.Router();

//const listaLivros = [];
const listaLivros = [
  {
    nome: "Divã",
    autor: "Martha Medeiros",
    imagem:
      "https://s2.glbimg.com/jL8GQ2h4q0zqppI8SyK6C9MDd2Q=/smart/e.glbimg.com/og/ed/f/original/2021/08/14/captura_de_tela_2021-08-14_as_19.35.41.png",
    ano: 2002,
  },
  {
    nome: "Um Lugar na Janela",
    autor: "Martha Medeiros",
    imagem:
      "https://s2.glbimg.com/EUeEoY3SWIpJES0-LfbbbXoL93k=/smart/e.glbimg.com/og/ed/f/original/2021/08/14/captura_de_tela_2021-08-14_as_19.43.21.png",
    ano: 2012,
  },
  {
    nome: "Feliz por Nada",
    autor: "Martha Medeiros",
    imagem:
      "https://s2.glbimg.com/DJnl02GqQ_edpIRQDQrCeLdmGws=/smart/e.glbimg.com/og/ed/f/original/2021/08/14/captura_de_tela_2021-08-14_as_19.44.23.png",
    ano: 2011,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Livros ok" });
});

router.get("/listar", (req, res) => {
  res.status(200).json(listaLivros);
});

router.get("/listar/:id", (req, res) => {
  const id = req.params.id;
  const livro = listaLivros[id];

  if (!livro) {
    res.status("404").json(`Livro ID ${id} não existe`);
    return;
  }

  res.status(200).json({ livro });
});

router.post("/", (req, res) => {
  const livro = req.body;

  if (!livro.nome) {
    res.status(400).json({ message: "Nome na requisição está vazio!" });
    return;
  }
  if (!livro.autor) {
    res.status(400).json({ message: "Autor na requisição está vazio!" });
    return;
  }
  if (!livro.imagem) {
    res.status(400).json({ message: "Imagem na requisição está vazio!" });
    return;
  }
  if (!livro.ano) {
    res.status(400).json({ message: "Ano na requisição está vazio!" });
    return;
  }

  listaLivros.push(livro);
  res.status(201).json({ message: "Cadastrado com sucesso" });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const livro = listaLivros[id];

  if (!livro) {
    res.status("404").json(`Livro ID ${id} não existe`);
    return;
  }

  listaLivros[id] = req.body;

  res.status(200).json(listaLivros[id]);
});

router.delete("/deletar/:id", (req, res) => {
  const id = req.params.id;
  const livro = listaLivros[id];

  if (!livro) {
    res.status("404").json(`Livro ID ${id} não existe`);
    return;
  }

  listaLivros.splice(id, 1);
  res.status(200).json({ message: "Registro Deletado", listaLivros });
});

module.exports = router;
