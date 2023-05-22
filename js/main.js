$(document).ready(function () {
    $("#carousel-images").slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
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
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um número de celular'
        },
        submitHandler: function (form) {
            alert("Formulário enviado com sucesso!")
            $(input).empty();
        },
        invalidHandler: function (enviado, checar) {
            let camposIncorretos = checar.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({ // Esse método do jQuery faz a animação de rolagem. ela faz a rolagem até o topo do elemento #contato
            scrollTop: destino.offset().top
        }, 1000)
    })

});