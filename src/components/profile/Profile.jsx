import React from 'react';
import styles from './profile.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Profile({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, instagramUrl, theme }) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.info}>{bio}</div>
      <div className={styles.info}>{phone}</div>
      <div className={styles.info}>{email}</div>
      <div className={styles.links}>
        <a href={githubUrl} target='_blank' rel='noreferer' className={theme === 'male' ? styles.linkButtonMale : styles.linkButton}>
          <FaGithub className={styles.icon} />
          GitHub
        </a>
        <a href={linkedinUrl} target='_blank' rel='noreferer' className={theme === 'male' ? styles.linkButtonMale : styles.linkButton}>
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </a>
        <a href={instagramUrl} target='_blank' rel='noreferer' className={theme === 'male' ? styles.linkButtonMale : styles.linkButton}>
          <FaInstagram className={styles.icon} />
          Instagram
        </a>
      </div>
    </div>
  );
}
