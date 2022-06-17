
import React from 'react'
import './contact.scss'

import SimpleMap from '../simpleMap/SimpleMap';



export default function Contact() {

  return (
    <div id='contact'>
        <div className="col-12">
          <h2>Nossos Contatos</h2>

          <div className="box">
              <div className="col-3">
                  <img src="/assets/icons/whatsapp.png" alt="" />
                  <div className="text">
                    <h3>Whatsapp</h3>
                  </div>
              </div>
              <div className="col-3">
              <img src="/assets/icons/facebook.png" alt="" />
                  <div className="text">
                    <h3>Facebook</h3>
                  </div>
              </div>
              <div className="col-3">
              <img src="/assets/icons/instagram.png" alt="" />
                  <div className="text">
                    <h3>Instagram</h3>
                  </div>
              </div>
          </div>
        </div>
        <div className="redes">
        <SimpleMap/>
        </div>
    </div>
  )
}
