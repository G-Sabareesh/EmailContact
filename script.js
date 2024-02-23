document.getElementById("formsubmit").addEventListener('click', () => {
    // Retrieve input values
    var name = document.getElementById('name');
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill all the details.");
        return; // Stop further execution
    }
    else{
        // Create param array
    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    emailjs.send("service_w2yek4s", "template_dqslyqn",params).then(alert("Your Mail send Successully."));
    // For demonstration, you can log the params
    console.log(params);
    }
    
    // Here you can proceed to send the email using AJAX or any other method
});