import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const AccordionSection = ({ section, reference }) => {
  const [state, setState] = useState([])
  const [height, setHeight] = useState({})

  const handleClick = e => {
    const { name } = e.target

    if (state.includes(name)) {
      const array = [...state]
      const index = state.indexOf(name)

      if (index > -1) array.splice(index, 1)

      setState(array)
      setHeight({ ...height, [name]: '0' })
    } else {
      setState([...state, name])
      setHeight({
        ...height,
        [name]: `${reference.current.scrollHeight}px`
      })
    }
  }

  return (
    <div
      className={`
      accordion 
      ${state.includes(section.title) ? 'accordion--open' : 'accordion--closed'}`}
    >
      <button name={section.title} onClick={handleClick}>
        {section.buttonCopy}
      </button>
      <div
        className="accordion__content"
        ref={reference}
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

AccordionSection.propTypes = {
  section: PropTypes.object.isRequired,
  reference: PropTypes.object.isRequired
}

AccordionSection.defaultProps = {
  section: {},
  reference: { current: null },
}
