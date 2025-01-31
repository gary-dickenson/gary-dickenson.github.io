import { useEffect, useState } from 'react'
import '../styles/Skills.scss'
import { animated, useTransition } from '@react-spring/web'
import { isMobile } from 'react-device-detect'

const yearsExperience = () => {
  const startDate = new Date(2005, 4, 1)
  const currentDate = new Date()
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  return yearsDiff
}

const data = [
  { id: 1, title: ['Over ' + yearsExperience() + ' Years Experience'] },
  { id: 2, title: 'Full Stack Development' },
  { id: 3, title: 'Microservices' },
  { id: 4, title: "Collaboration" },
  { id: 5, title: "RESTful Web API's" },
  { id: 6, title: 'Systems Integration' },
  { id: 7, title: 'Infrastructure as Code' },
  { id: 8, title: 'Application Design' },
  { id: 9, title: 'Lean Code' },
  { id: 10, title: 'Containerisation' },
  { id: 11, title: "Reactive Programming" },
  { id: 12, title: 'Automation' },
  { id: 13, title: 'Continuous Integration & Delivery' },
]

export default ({ keySkills = data }) => {
  const [index, setIndex] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const toggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = 0
    if (isActive) {
      interval = setInterval(() => {
        setIndex((index) =>
          index === Object.keys(keySkills).length - 1 ? 0 : index + 1
        )
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  const skillsTransitions = useTransition(
    keySkills[index],
    {
      exitBeforeEnter: true,
      from: { opacity: 0, width: '0%' },
      enter: { opacity: 1, width: '100%' },
      leave: { opacity: 1, width: '100%' },
      config: {
        duration: 1000,
        mass: 5,
        tension: 200,
        friction: 0,
        clamp: true
      }
    }
  )

  return skillsTransitions((style, item) => (
    <animated.div
      className={`skills-container ${!isMobile ? 'can-pause' : ''} `}
      key={'main_' + item.id}
      style={style}
      onMouseEnter={!isMobile ? toggle : void 0}
      onMouseLeave={!isMobile ? toggle : void 0}
    >
      <span className="skill-title">{item.title}</span>
      <hr />
    </animated.div>
  ))
}
