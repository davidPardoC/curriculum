function sendEmail() {

    var mail = document.getElementById('exampleInputEmail1').value
    var nombre = document.getElementById('exampleInputText').value
    var mensaje = document.getElementById('exampleFormControlTextarea1').value
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "pardodavid10@gmail.com",
        Password: "A6A689652616F259774E0A985C00B0A61ED7",
        To: 'pardodavid10@gmail.com',
        From: "pardodavid10@gmail.com",
        Subject: "Información",
        Body: `Mail: ${mail}  Nombre: ${nombre} Mensaje:${mensaje}`
    }).then(
        (message) => {
            $('#element').toast('show')
            document.getElementById('exampleInputEmail1').value = ' ';
            document.getElementById('exampleInputText').value = ' ';
            document.getElementById('exampleFormControlTextarea1').value = ' ';
        }
    );
}

/*493B1E814E4421D460021571281120638FD6ACF959C5F4E0B313EB7A34675D6D22AE5AAD9C2E86D25E96524604549C02*/