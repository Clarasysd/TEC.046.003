// Atividade 1: O Filtro de Hashtags
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
const tags_js = tags.filter = tags.filter (n => n.includes("#js"));
tags_js.forEach (n => console.log(n));

//Atividade 2: Formatador de Nomes de Usuário
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
const maiusculas = usuarios.map (n => n.toUpperCase());
usuarios.forEach (n => console.log (n.toUpperCase()));
usuarios.map (n => n.toLowerCase())
    .forEach (n => console.log (n));

// Atividade 3: Sistema de Busca de Convidados
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const busca = convidados.filter(nome => nome.startsWith("A"));
busca.forEach(nome => console.log(nome));
