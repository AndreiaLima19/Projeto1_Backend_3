# Projeto1_Backend_3

Desenvolvimento de uma API (NODE + Express) para cadastro de 3 temas.

Temas : Filmes, Séries e Livros.



**** Existem os seguintes Endpoints por rota(tema):

[GET]    Leitura de todas os itens

[GET]    Leitura de itens individuais (por ID)

[POST]   Cadastro

[PUT]    Edição de item por ID

[DELETE] Exclusão de item por ID

//////////////////////////////////////////////////////////////////////////

**** Endpoints - Filmes  ****

[GET] Leitura de todos os itens

http://localhost:3000/filmes/listar


[GET] Leitura de itens individuais (por index)

http://localhost:3000/filmes/listar/id


[POST] Cadastro
  
http://localhost:3000/filmes/

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "descricao": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[PUT] Edição de item por ID
  
http://localhost:3000/filmes/id

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "descricao": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[DELETE] Exclusão de item por ID
  
http://localhost:3000/filmes/deletar/id


  
//////////////////////////////////////////////////////////////////////////
  
**** Endpoints - Séries  ****

[GET] Leitura de todos os itens
  
http://localhost:3000/series/listar


[GET] Leitura de itens individuais (por index)
  
http://localhost:3000/series/listar/id


[POST] Cadastro
  
http://localhost:3000/series/

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "descricao": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[PUT] Edição de item por ID
  
http://localhost:3000/series/id

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "descricao": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[DELETE] Exclusão de item por ID
  
http://localhost:3000/series/deletar/id


  
//////////////////////////////////////////////////////////////////////////
  
**** Endpoints - Livros  ****

[GET] Leitura de todos os itens
  
http://localhost:3000/livros/listar


[GET] Leitura de itens individuais (por index)
  
http://localhost:3000/livros/listar/id


[POST] Cadastro
  
http://localhost:3000/livros/

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "autor": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[PUT] Edição de item por ID
  
http://localhost:3000/livros/id

Todos os campos são obrigatórios:

{ 
  "nome": "String",
  "autor": "String",

  "imagem": "String",

  "ano": "Integer"    
}


[DELETE] Exclusão de item por ID
  
http://localhost:3000/livros/deletar/id



