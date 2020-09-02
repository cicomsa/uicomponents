import React, { useState } from 'react'
import './index.scss'

const AccordionSection = ({ section, reference, accordion }) => {
  const [state, setState] = useState([])
  const [height, setHeight] = useState({});

  const handleClick = e => {
    const { name } = e.target
    const accordionSection = accordion.find(section => section.title === name)
    const ref = Object.keys(accordionSection).pop()

    if (state.includes(name)) {
      const array = [...state]
      const index = state.indexOf(name);
      if (index > -1) {
        array.splice(index, 1);
      }
      setState(array)
      setHeight({ ...height, [name]: '0' })
    } else {
      setState([...state, name])
      setHeight({
        ...height,
        [name]: `${accordionSection[ref].current.scrollHeight}px`
      })
    }
  }
  return (
    <div
      key={section.title}
      className={`
      accordion 
      ${state.includes(section.title) ? 'accordion--open' : 'accordion--closed'}`}
    >
      <button name={section.title} onClick={handleClick}>
        {section.buttonCopy}
      </button>
      <div
        className="accordion__content"
        ref={section[reference]}
        style={{
          height: `${
            height[section.title] ? height[section.title] : '0'
            }`
        }}
      >
        {section.content}
      </div>
    </div>
  )
}

export default AccordionSection
