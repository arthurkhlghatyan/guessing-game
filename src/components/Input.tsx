import React from "react";
import styles from './Input.module.css';

interface AdditionalInputProps {
  withLabel?: string
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & AdditionalInputProps) {
  const {withLabel, ...inputProps} = props;

  if (typeof withLabel !== 'undefined') {
    return (
      <>
        <label className={styles.label} htmlFor={inputProps.id}>{withLabel}</label>
        <input className={styles.input} {...inputProps} />
      </>
    );
  }

  return (
    <input {...inputProps} />
  );  
}

export default Input;