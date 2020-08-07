function sendEmail() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "pardodavid10@gmail.com",
        Password: "1105181083",
        To: 'pardodavid10@gmail.com',
        From: "sender@example.com",
        Subject: "Información",
        Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert(message)
    );
}