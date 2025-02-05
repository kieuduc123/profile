import React, { useState, useEffect } from 'react'
import './toggletheme.scss'
const ToggleTheme = () => {
  const storedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(storedTheme)
    useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
 


  const onClickTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') return 'light';
      else {
        return 'dark'
      }
    })
    document.querySelector('.toggle-theme').classList.toggle('active')
}
  return (
    <button className="toggle-theme " onClick={onClickTheme}>
      <i className='bx bxs-moon'></i>
      <i className='bx bx-bulb'></i>
    </button>
  )
}

export default ToggleTheme;