import React,{ useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/loginForm.module.scss";

export const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailDirty, setEmailDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [emailError, setEmailError] = useState("The email can`t be empty");
const [passwordError, setPasswordError] = useState("The password can`t be empty");
const [formValid, setFormValid] =useState (false)
const [submitSuccess, setSubmitSuccess] = useState(false);


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
    setEmailError("Wrong email")
  } else {
    setEmailError("")
  }
}

const passwordHandler = (event) => {
  setPassword(event.target.value);

  if (!event.target.value) {
    setPasswordError("The password can't be empty");
  } else if (event.target.value.length < 4 || event.target.value.length > 10) {
    setPasswordError("The password must be at least 4 characters long and no longer than 10");
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
  
const handleSubmit = async (event) => {
  event.preventDefault();

  if (formValid) {
    try {
        const response = await fetch("https://staging-api.takyon.io/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

        if (response.ok) {
        setSubmitSuccess(true);
        toast.success("Login successful!");
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to log in. Please try again later.");
    }
  }
};



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
        disabled={!formValid}
        onClick={handleSubmit}
        > 
        LOGIN
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};