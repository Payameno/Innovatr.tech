import { useState } from 'react'
import '../../styles/projects.css'

export default function ProjectsBlock() {

  const [P1, setP1] = useState(null)
  const [P2, setP2] = useState(null)
  const [P3, setP3] = useState(null)
  const [P4, setP4] = useState(null)

  const handleHoverLeftP1 = () => {
    P1 ? setP1(null) : setP1("hover-left")
  }
  const handleHoverRightP2 = (e) => {
    P2 ? setP2(null) : setP2("hover-right")
  }
  const handleHoverLeftP3 = (e) => {
    P3 ? setP3(null) : setP3("hover-left")
  }
  const handleHoverRightP4 = (e) => {
    P4 ? setP4(null) : setP4("hover-right")
  }

  return (
    <div className='project-container'>
      <div className={`project-block`}>
        <p className='section-title'>Web 2.0 Development Projects</p>
        <div className="inner-container s1 border background-reverse">
          <div className={`image-card-left ${P1}`}>
            <img className="gif-showcase" src='/media/img/MLD.gif' alt='testing' onClick={handleHoverLeftP1} />
          </div>
          <div className="description-card-right background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Portfolio</div>
              <div className='project-description text-reverse'>
                My portfolio built with React.js. Incorporated an extensive varity of stylings, designs, and effects to enhance my front-end skills.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/diavolosz/website-mleduong.com' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>


        <div className="inner-container s2 border background-reverse">
          <div className="description-card-left background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> BayStreetbets </div>
              <div className='project-description text-reverse'>
                A Stock Trading Platform that allow user to keep track of their stocks and portfolios. Has unique feature for trade competitions with peers to crown the winner.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/diavolosz/BayStreetBets' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          <div className={`image-card-right ${P2}`}>
            <img className="gif-showcase" src='/media/img/BBS.gif' alt='testing' onClick={handleHoverRightP2} />
          </div>
        </div>


        <div className="inner-container s3 border background-reverse">
          <div className={`image-card-left ${P3}`}>
            <img className="gif-showcase" src='/media/img/PNT.gif' alt='testing' onClick={handleHoverLeftP3} />
          </div>
          <div className="description-card-right background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Pinnet </div>
              <div className='project-description text-reverse'>
                An Address Notebook. Pinnet offers users the ability to pin and save their favorite place to eat or hangout by creating their own sharable address list.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/diavolosz/Lighthouse-MT-wikiMaps' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container s4 border background-reverse">
          <div className="description-card-left background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Jungle </div>
              <div className='project-description text-reverse'>
                A mini E-commerce. Built with Ruby on Rails, the application allows visitors to view, purchase plants while allowing seller to stock up inventory and sell.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/diavolosz/RubyRails-jungle-project' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          <div className={`image-card-right ${P4}`}>
            <img className="gif-showcase" src='/media/img/JUN.gif' alt='testing' onClick={handleHoverRightP4} />
          </div>
        </div>

      </div>
    </div>
  )
}