import React from 'react'
import './about.scss'

export default function About() {
  return (
    <div id='about'>

        <div className="col-12">
            <div className="text-box">
              <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
              <h3>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !</h3>
              <div className="container">
                <div className="col-4">
                    <img src="/assets/icons/science.png" alt="" />
                </div>
                <div className="col-4">
                    <img src="/assets/icons/javascript.png" alt="" />
                </div>
                <div className="col-4">
                    <img src="/assets/icons/html-5.png" alt="" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
