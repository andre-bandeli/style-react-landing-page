import React from 'react'
import './header.scss'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <div id='header'>
        <div className="container">
            <h1>Style React Template</h1>
            <h3>Um template desenvolvido em react</h3>
            <Button variant="secondary"> int </Button>{' '}

        </div>
    </div>
  )
}
