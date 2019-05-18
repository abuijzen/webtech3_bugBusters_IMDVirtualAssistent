//eventlistener op submit button
let btnSignup = document.querySelector(".btn.btn--primary");
btnSignup.addEventListener("click", click =>{

    //lees values uit de velden
    let username = document.querySelector("#email").value;
    let password = document.querySelector('#password').value;
    
    //ajax call
    fetch('http://localhost:3000/users/signup',{
        //post methode
        method:"post",
        //belangrijk bij fetch: meegeven welke content er heen en weer word gestuurd
        headers:{
            'Content-Type': 'application/json'
        },
        
        //json string die we meegeven
        //bestaande uit username en password
        body: JSON.stringify({
            "username":username,
            "password":password
        })
        //gkrijg je respons? krijg een antwoord dat word geparsed naar JSON 
        }).then(response=>{
            return response.json();

        //als de status = "succes" is word de hidden boodschap getoond in het formulier
    }).then(json =>{
        if(json.status === "succes"){
            let feedback = document.querySelector(".alert");
            feedback.textContent= "Sign up complete!";
            feedback.classList.remove('hidden');
        }
    })
        
    });