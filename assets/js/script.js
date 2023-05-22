document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulario');

});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

  console.log('O mouse está fora do formulário');
    
});

document.querySelector('#form-login').addEventListener('submit', e=>{

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email, password);

        let json = {
            email,
            password
        };
    
        if (!json.email) {

            console.error("O campo e-mail deve ser preenchido!");

        } else if (!json.password) {

            console.error("O campo password deve ser preenchido");

        }

});