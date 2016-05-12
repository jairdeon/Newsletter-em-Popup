(function($){
	// Inicia a função
	$(document).ready(function(){

		// Cria um cookie de acesso = a 0
		var acesso = Cookies.get('acesso');

		// Se o cookie for diferente de 1 (se o visitante ainda não fechou o popup, reproduz o código abaixo.)
		if(acesso != 1){

			// Insere um delay de 3 segundos para aparecer o popup
			setTimeout(function () {

				// Insere o código html dentro de body
				$('body').append(
					'<div id="exitpopup">' + 
					'<div>' + 
					'<h3>Assine nossa newsletter e receba novidades!</h3>' +
					'<form id="ajax_form" method="post">' + 
					'<input type="text" placeholder="Seu nome: " value="" required name="nome" id="exit_emailinput">' + 
					'<input type="text" placeholder="Seu email: " name="email" required id="exit_emailinput">' + 
					'<input type="text" placeholder="Telefone / Celular: " value="" name="telefone" id="exit_emailinput" class="telefone">' + 
					'<button id="exit_subscribe" class="enviar">Enviar</button>' + 
					'</form>' + 
					'<span class="close closex"></span>' + 
					'</div>' + 
					'</div>'
				).slideUp(0).delay(0).fadeIn( 400 );
				// adiciona uma transição quando carrega o popup

				// Inicia o ajax, carregando o cadastra.php
				var url = 'cadastra.php';

				// Insere uma função no formulário, para quando ele é submetido
				$('#ajax_form').submit(function(e){
				var dados = $(this).serialize();
				$.ajax({
					type: "POST",
					url: url,
					data: dados,
					success: function(data)
						{
							// Se o email não existe, ele é cadastrado com sucesso.
							if(data == 1){$("h3").html('Cadastrado com sucesso.');}

							// Caso contrário, ele cancela o evento e informa que o email já está cadastrado.
							else {$("h3").html('Email já cadastrado.'); e.preventDefault();}
						}
					});

				// Não permite que a página seja carregada novamente.
				return false;
				});


				// Quando clicado em closex, (no X) ele executa o código abaixo.
				$('.closex').click(function() {

					// Seta o cookie para 1
					Cookies.set('acesso', '1');

					// Adiciona a classe hide no código, fazendo-o fechar.
				    $("#exitpopup").addClass('hide');
				});

			}, 3000);	

				// Cria uma mascara no campo de telefone, para ser digitado no formato brasileiro.
			$('.telefone').mask('(35) Z0000 - 0000', {translation:  {'Z': {pattern: /[9]/, optional: true}}});
		}

	});
})(jQuery)