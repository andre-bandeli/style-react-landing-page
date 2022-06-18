import React from 'react'
import './budget.scss'
import { Button } from 'react-bootstrap';

export default function Budget() {
  return (
    <div id='budget'>
        <div className="container">
          <div className="box">
            <h1>SOLICITE UM ORÇAMENTO</h1>
            <Button variant="warning">CONTACT</Button>{' '}
          </div>
        
        </div>
    </div>
  )
}
