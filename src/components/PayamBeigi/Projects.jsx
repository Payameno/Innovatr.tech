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
            <img className="gif-showcase" src='/media/img/portfolio.gif' alt='testing' onClick={handleHoverLeftP1} />
          </div>
          <div className="description-card-right background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Portfolio</div>
              <div className='project-description text-reverse'>
                My portfolio built with React.js. Incorporated an extensive varity of stylings, designs, and effects to enhance my front-end skills.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>


        <div className="inner-container s2 border background-reverse">
          <div className="description-card-left background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> FitPal </div>
              <div className='project-description text-reverse'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nostrum veniam eveniet, dolorem fuga nam sint in asperiores reiciendis ut, sapiente iure cupiditate expedita distinctio. Unde fuga accusamus libero recusandae!
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          <div className={`image-card-right ${P2}`}>
            <img className="gif-showcase" src='/media/img/FitPal.gif' alt='testing' onClick={handleHoverRightP2} />
          </div>
        </div>


        <div className="inner-container s3 border background-reverse">
          <div className={`image-card-left ${P3}`}>
            <img className="gif-showcase" src='/media/img/DecisionMaker.gif' alt='testing' onClick={handleHoverLeftP3} />
          </div>
          <div className="description-card-right background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> DecisionMaker </div>
              <div className='project-description text-reverse'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt sunt ea, voluptatem suscipit perferendis ipsa, sit assumenda totam possimus corporis qui omnis numquam repudiandae accusantium earum voluptas ad dolor?
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container s4 border background-reverse">
          <div className="description-card-left background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Jungle </div>
              <div className='project-description text-reverse'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos veniam saepe ex cumque incidunt voluptatem, eius est nobis eveniet aliquam minima veritatis dolorum labore corporis sapiente perferendis mollitia, ad quo.
              </div>
              <div className='button-wrapper background text'>
                <a href='https://github.com/' className='button-to-project' target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          <div className={`image-card-right ${P4}`}>
            <img className="gif-showcase" src='/media/img/jungle.gif' alt='testing' onClick={handleHoverRightP4} />
          </div>
        </div>

      </div>
    </div>
  )
}