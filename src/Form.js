import React, { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateEmail(email){
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
        return false;
    }
    return true;
  }

  function containsNumbers(str) {
    return /\d/.test(str);
  }

  function validatePassword(password){
    let pass = String(password);
    let first = String(pass[0]);
    if (first !== first.toUpperCase()){
        return "First character should be uppercase letter";
    }else if(!pass.includes("_")){
        return "Password should contain underline (_)";
    }else if (!containsNumbers(pass)){
        return "Password should container at least one digit";
    }
    return "";
  }

  function handleSubmit(e){
    e.preventDefault();

    const emailCheck = validateEmail(email);
    if (!emailCheck){
        alert("Email is not valid!");
        return;
    }

    var val = validatePassword(password);
    if (val !== ""){
        alert(val);
        return;
    }


    alert("Your data email is : " + email + "\n Your password is : " + password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <section>
            <label>Email</label>
            <input type='email' 
                   name='email'
                   value={email}
                   placeholder='Enter your email . . .' 
                   onChange={(e) => setEmail(e.target.value)}>
            </input>
        </section>

        <section>
            <label>Password</label>
            <input type='password' 
                   name='password'
                   value={password}
                   placeholder='Enter your password . . .' 
                   onChange={(e) => setPassword(e.target.value)}>
            </input>
        </section>

        <button>Submit</button>
      </form>
    </div>
  )
}
