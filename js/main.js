$(document).ready(function() {
  $('#carousel-imagens').slick({
      autoplay: true
  })

  $('.menu-hamburguer').click(() => {
      $('nav').slideToggle();
  })

  $('#telefone').mask('(00) 00000-0000')

  $('.form__contact').validate({
      rules: {
          nome: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          telefone: {
              required: true
          }
      }, 
      messages: {
          nome: "Por favor, insira o seu nome"
      }
  })

  $('.lista-veiculos button').click(function() {
    const destino = $('#contato')
    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(nomeVeiculo)
    
    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
  })

  const modal = $('.register');
  const btnRegister = $('.register__btn')
  const btnClose = $('#btn__close')
  

    // Esconder o modal inicialmente
    modal.hide();

    // Abrir o modal quando #register-link é clicado
    $('#register-link').click(function() {
        modal.show();
    });

    $(btnRegister).click(function() {
        modal.hide();
    })

    $(btnClose).click(() => {
        modal.hide()
    })

    $('#telefone-registro').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')



})