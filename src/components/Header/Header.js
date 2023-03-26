import React from 'react'
import Input from '../Form/Input'
import './Header.css'

function Header({menu, onHandlemenu}) {
  return (
    <header className='header'>
        <h1>#Todo List</h1>
        <ul className='header-menu'>
          <Input value="all" menu={menu} onChange={onHandlemenu}/>
          <Input value="active" menu={menu} onChange={onHandlemenu}/>
          <Input value="complete" menu={menu} onChange={onHandlemenu}/>
        </ul>
    </header>
  )
}

export default Header