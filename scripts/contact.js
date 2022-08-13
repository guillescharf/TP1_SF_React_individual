var validEmail = false;

function formReset(){
    document.getElementById('contactFormName').value = "";
    document.getElementById('contactFormEmail').value = "";
    document.getElementById('contactFormComments').value = ""; 
    validEmail = false;
    return false;
}

function isEmailValid(email){
    //Funcion de validacion basica de email con los metodos vistos hasta el momento en el SK de React.js
    const emailParts = email.split('@');
    //Verifico que el email tenga uno y solo un simbolo @    
    if(emailParts.length !== 2){
        return false;
    }else{
        const domainParts = emailParts[1].split('.');
        //verifico que despues del @ esten el dominio y la extension
        if(domainParts.length <2){
            return false;
        }else{
            //Verifico que no sean vacios ni el usuario, ni el dominio, ni la extension
            if((emailParts[0].length > 0) && (domainParts[0].length >0) && (domainParts[1].length >0)){
                return true;
            }else{
                return false;
            }
        }
    }
}

function validateEmail() {
    const inputEmail = document.getElementById('contactFormEmail');
  
    if(isEmailValid(inputEmail.value.trim())){ 
        validEmail = true;
        inputEmail.style.color = "green";
    }else{  
        validEmail = false;
        inputEmail.style.color = "red";        
    }  
}

function sendForm(){
    if(!validEmail){
        alert("Please, enter a valid Email address.");
        return false;
    }else if(document.getElementById('contactFormName').value.trim() == "" || 
             document.getElementById('contactFormComments').value.trim() == ""){
        alert("Please, complete all the fields.");
        return false;

    }else{
        // Aca deberia enviar los datos a un script para procesarlos, por ahora "simulamos"
        // el envio.... si devolvieramos true, se realizaria el submit del form al action establecido.
        //formReset();
        showFormData();
        return false;
    }
}

function showFormData(){
    const name = document.getElementById('contactFormName').value;
    const email = document.getElementById('contactFormEmail').value;
    const comments = document.getElementById('contactFormComments').value;   
    // Este mensaje es ilustrativo para mostrar la info que se deberia enviar por el form
    const msgToShow = `
    <div class="msgToShow">
        <h1>Message Sent</h1>
        <p>Your message has been sent as following:</p>
        <br /><br />
        <p>
            <u>Name:</u> <i>${name}</i><br /><br />
            <u>Email:</u> <i>${email}</i><br /><br />
            <u>Comments:</u> <i>${comments}</i><br /><br />
        </p>
    </div>
    `;

    document.getElementById("contactForm").innerHTML = msgToShow;
}