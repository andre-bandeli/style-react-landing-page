import React from 'react'
import './projects.scss'


export default function Projects() {
  return (
    <div id='projects'>
        <div className="col-8">
          <h2>Nossos Projetos</h2>

          <div className="col-12">
            <div className="col-6">
                  <img src="/assets/img/f1.png" alt="" />
            </div>
            <div className="col-6">
            <img src="/assets/img/dark-image.jpg" alt="" />
            </div>
            <div className="col-6">
            <img src="/assets/img/f3.png" alt="" />
              </div>
              <div className="col-6">
              <img src="/assets/img/projects.png" alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}
