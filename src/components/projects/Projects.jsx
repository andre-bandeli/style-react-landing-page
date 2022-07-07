import React from 'react'
import './projects.scss'


export default function Projects() {
  return (
    <div id='projects'>
        <div className="col-8">
        <h3>MAIS VISUALIZADAS</h3>
          <h2>Principais Receitas</h2>

          <div className="col-12">
            <div className="col-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8qFZ0N4R68k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-6">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/aLSxRA6HQo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-6">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/dmM_fCViyLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-6">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/l0Q7sC_jueA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        </div>
    </div>
  )
}
