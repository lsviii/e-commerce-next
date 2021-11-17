const validate = (nome, email, password, cf_password) => {

    
    if(!nome || !email || !password || !cf_password) {
        return "Todos os campos devem ser preenchidos!";
    }

    if (!validateEmail(email)){
        return "E-mail inválido!"
    }

    if (password.length <= 6){
        return "O password deve ter 6 dígitos"
    }

    if(password !== cf_password){
        return "Password não conferem!"
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}

export default validate;