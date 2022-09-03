function preventSubmit() {
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault();
    })
    let first = document.getElementById('firstName')
    let last = document.getElementById('lastName')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    //Verif input Name
    if (first.value == 0 
        || last.value == 0) {
            first.style.borderColor = 'hsl(0, 100%, 74%)'
            last.style.borderColor = 'hsl(0, 100%, 74%)'
        } 
    else {
        first.style.borderColor = ''
        last.style.borderColor = ''
    }
    //Verif input email
    if (email.value == 0 
        || email.value.indexOf('@') == -1 
         || email.value.indexOf('.') == -1)
            {
                email.style.borderColor = 'hsl(0, 100%, 74%)'
                email.placeholder = 'email@example/com'
            }
    else{
        email.style.borderColor = ''
        email.placeholder = 'Email Address'
    }
    //Verif input password
    if(password.value == 0){
        password.style.borderColor = 'hsl(0, 100%, 74%)'
    }
    else if(password.value.length <= 5){
        password.style.borderColor = 'hsl(0, 100%, 74%)'
        alert('Your password cannot be minus of five characters! Please, fill up correctly.')
    }
    else{
        password.style.borderColor = ''
    }

}



