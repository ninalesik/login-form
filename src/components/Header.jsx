import React from 'react';
import Logo from './Logo'; 
import styles from "../styles/header.module.scss"



export const Header = () => {
    return (
      <div className={styles.header}>
      <Logo />
      </div>
    );
  };
