import React, { createRef, useRef } from 'react'
import PropTypes from 'prop-types'
import AccordionSection from '../AccordionSection'

const Accordion = ({ accordionData }) => {
  const sectionsRef = useRef(accordionData.map(() => createRef()))

  return (
    accordionData.map((section, i) => {
      return (
        <AccordionSection
          section={section}
          reference={sectionsRef.current[i]}
          key={section.title}
        />
      )
    })
  )
}

export default Accordion

Accordion.propTypes = {
  accordionData: PropTypes.array.isRequired
}

Accordion.defaultProps = {
  accordionData: []
}
