import React,{ useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from "../styles/loginForm.module.scss";





export const Login = () => (

   <div className={styles.container}>
  <Form className={styles.loginForm}>
    <h1>Login</h1>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.formLabel}>Email</Form.Label>
        <Form.Control 
        name="email" 
        className={styles.input}
        type="email" 
        placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.formLabel}>Password</Form.Label>
        <Form.Control 
        name="password"
        className={styles.input} 
        type="password" 
        placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.btnPrimary}>
        LOGIN
      </Button>
      </Form>
      </div>
);
