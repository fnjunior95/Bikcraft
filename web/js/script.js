if (window.SimpleSlide){
new SimpleSlide({
  slide: "quote", // nome do atributo
  nav: false, //se deve ou não ser navegavel
  auto: true, //se o slide deve passar automaticamente
  time: 5000 //tempo de transição dos slides. Contado em milisegundos 1seg = 1000
});
new SimpleSlide({
  slide: "portfolio", // nome do atributo
  nav: true, //se deve ou não ser navegavel
  auto: true, //se o slide deve passar automaticamente
  time: 5000 //tempo de transição dos slides. Contado em milisegundos 1seg = 1000
});
}
// colocando animação nos elementos ao carregar o site 
if (window.SimpleAnime){
  new SimpleAnime();
}

if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}