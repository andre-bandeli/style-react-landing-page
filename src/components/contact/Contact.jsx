
import React from 'react'
import './contact.scss'

import SimpleMap from '../simpleMap/SimpleMap';
import ReactElasticCarousel from 'react-elastic-carousel'



export default function Contact() {

  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
  ]


  return (
    <div id='contact'>
      <h2>Accesso Rápido</h2>
        <div className="col-12">
          

          <div className="container">
        <ReactElasticCarousel breakPoints={breakPoints}>

                <div className='box'>
                    <div className="text">
                        <h2>Receita 1</h2>
                    </div>
                </div>
               <div className='box'>
            
                    <div className="text">
                        <h2>Receita 1</h2>
                    </div>
               </div>

               <div className='box'>
                  <div className="text">
                      <h2>Receita 1</h2>
                  </div>
               </div>
               <div className='box'>
                  <div className="text">
                      <h2>Receita 1</h2>
                  </div>
               </div>
               <div className='box'>
                  <div className="text">
                      <h2>Receita 1</h2>
                  </div>
               </div>
               <div className='box'>
                  <div className="text">
                      <h2>Receita 1</h2>
                  </div>
               </div>
               <div className='box'>
                  <div className="text">
                      <h2>Receita 1</h2>
                  </div>
               </div>

          </ReactElasticCarousel>
        </div>
        </div>
    </div>
  )
}
