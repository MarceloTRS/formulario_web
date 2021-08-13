/*--- LOGIN SHOW AND HIDDEN ---*/
const   singUp = document.getElementById('sign-up');   /* busca o botão sign-up */ 
        singIn = document.getElementById('sign-in');   /* busca o botão sign-in */ 
        loginIn = document.getElementById('login-in'); /* busca o form 'login-in */
        loginUp = document.getElementById('login-up'); /* busca o form 'login-up */

singUp.addEventListener('click', function() {
    //Remove classes first if they exist
        loginIn.classList.remove('block');
        loginUp.classList.remove('none');

    //Add classes
        loginIn.classList.add('none');
        loginUp.classList.add('block');
});

singIn.addEventListener('click', function() {
    //Remove classes first if they exist
        loginIn.classList.remove('none');
        loginUp.classList.remove('block');

    //Add classes
        loginIn.classList.add('block');
        loginUp.classList.add('none');

});

/*--- TRANSLATE PT_BR - ENG ---*/

$('.translate').click(function() {                                           
    $('#language').val($(this).attr('data-language'));                      
        var lan = $(this).attr('id');
                                                                            
            if (lan=='pt_BR') { 
                                                          
            $('#label_user_a, #label_user_n' ).html('Usuário');                                        
            $('#label_pass_a, #label_pass_n').html('Senha');
            $('#placeholder_name, #placeholder_name_n').attr('placeholder', 'Infome usuário');
            $('#placeholder_password, #placeholder_password_n').attr('placeholder', 'Informe Senha');
            $('#placeholder_email_n').attr('placeholder', 'Informe email');
            $('#sigin_a').html('Bem-Vindo');
            $('#forgot_a').html('Esqueceu sua senha?');
            $('#dont_account').html("Não tem cadastro?");
            $('#sign-up').html("Cadastre-se");
            $('#btn_sign, #btn_sign_n').html("Entrar");
            $('#create_n').html('Crie sua Conta');
            $('#already_account').html('Já tem uma conta?');
            $('#sign-in').html('Entrar');
   
        }                                                                       
        
        else if (lan=='en_US') {                                                
            $('#label_user_a, #label_user_n').html('Username');                                        
            $('#label_pass_a, #label_pass_n').html('Password');
            $('#placeholder_name, #placeholder_name_n').attr('placeholder', 'Enter name');
            $('#placeholder_password, #placeholder_password_n').attr('placeholder', 'Enter password');
            $('#placeholder_email_n').attr('placeholder', 'Enter email');
            $('#sigin_a').html('Sign In');
            $('#forgot_a').html('Forgot password?');
            $('#dont_account').html("Don't have an Account?");
            $('#sign-up').html("Sign Up");
            $('#btn_sign, #btn_sign_n').html("Sign In");
            $('#create_n').html('Create Account');
            $('#already_account').html('Already have an Account?');
            $('#sign-in').html('Sign In');          
                        
        }                                                                    
    }
);




/*--- HIDE AND SHOW PASSWORD ---*/
$(document).ready(function () {

    $("#toggle").click(function () {

        if ($("#placeholder_password").attr("type") == "password")
        {
            //Change type atrribute
            $("#placeholder_password").attr("type", "text");

        }else
        {
            //Change type atrribute
            $("#placeholder_password").attr("type", "password");
        }
    
    });
});




