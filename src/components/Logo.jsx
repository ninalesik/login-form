import React from 'react';
import styles from "../styles/header.module.scss";
import logoImage from "../images/logo.png"; 

const Logo = () => {
  return (
<div className={styles.logo}>
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;