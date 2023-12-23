import React,{ useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from "../styles/loginForm.module.scss";


export const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailDirty, setEmailDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [emailError, setEmailError] = useState("The email can`t be empty");
const [passwordError, setPasswordError] = useState("The password can`t be empty");
const [formValid, setFormValid] =useState (false)

useEffect(()=>{
  if (emailError || passwordError){
    setFormValid(false)
  } else {
  setFormValid(true)
}
}, [emailError,passwordError])

const emailHandler = (event) => {
  setEmail(event.target.value)
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test((event.target.value).toLowerCase())){
    setEmailError("Wong email")
  } else {
    setEmailError("")
  }
}

const passwordHandler = (event) => {
  setPassword(event.target.value);

  if (!event.target.value) {
    setPasswordError("The password can't be empty");
  } else if (event.target.value.length < 4 || event.target.value.length > 8) {
    setPasswordError("The password must be at least 4 characters long and no longer than 8");
  } else {
    setPasswordError("");
  }
};


const blurHandler = (event) =>{
  switch (event.target.name){
    case "email":
      setEmailDirty(true)
      break
     case "password":
      setPasswordDirty (true) 
      break

  }
}
  
return (
    <div className={styles.container}>
      <Form className={styles.loginForm}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={styles.formLabel}>Email</Form.Label>
          {(emailDirty&&emailError)&& <div className={styles.error}>{emailError}</div>}
          <Form.Control
            name="email"
            className={styles.input}
            type="email"
            placeholder="your email..."
            onBlur={event => blurHandler(event)}
            onChange={event=>emailHandler(event)}
            value={email}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={styles.formLabel}>Password</Form.Label>
          {(passwordDirty&&passwordError)&& <div className={styles.error}>{passwordError}</div>}
          <Form.Control
            name="password"
            className={styles.input}
            type="password"
            placeholder="your password..."
            value={password}
            onBlur={event => blurHandler(event)} 
            onChange={event=>passwordHandler(event)}    
          />
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit" 
        className={styles.btnPrimary}
        disabled={!formValid}>
          LOGIN
        </Button>
      </Form>
    </div>
  );
};
