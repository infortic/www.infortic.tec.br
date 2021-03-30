angular.module("inforTIC", []).controller("inforticController", function ($scope, $http) {  

    $scope.emailObject={
        nome:"",
        email:"",
        mensagem:""
    };

    $scope.sendEmail = function(){
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

        let data =  {
            nome: $scope.emailObject.nome,
            email:  $scope.emailObject.email,
            mensagem: $scope.emailObject.mensagem
        };

        if(validaNome(data) && validaEmail(data)){
            enviar(data)    
        }
    }

    function enviar(data){
        $http.post("sendMail.php", data)
        .then(function (response) {
            console.log(response.data)
           alert("Email enviado com sucesso!")
           window.location.assign('https://www.infortic.tec.br');
        }, (response) => {
            alert("Erro")
            window.location.assign('https://www.infortic.tec.br');
        });
    }

    function validaNome(data){
        if(data.nome == "" || data.nome == "asdf" || data.nome == " "){
            alert("Nome inválido")
            return false;
        }else{
            return true;
        }
    }

    function validaEmail(data){
        if(data.email == "" || data.email == "asdf" || data.email == " " ){
            alert("Email inválido")
            return false;
        }else if(data.email.indexOf("@") != -1 && data.email.indexOf(".com") != -1){
            return true;
        }else{
            alert("Email inválido")
        }
    }
});