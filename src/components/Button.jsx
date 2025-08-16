import React from 'react'
import styles from '../style';

const Button = ({ styles }) => {
  return (
    <button type='button' className={`px-6 py-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}]`}>
      Get Started
    </button>
  )
}

export default Button