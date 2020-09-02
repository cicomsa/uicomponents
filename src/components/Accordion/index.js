import React, { useState, useRef } from 'react'
import AccordionSection from '../AccordionSection';

const Accordion = () => {
  const accordion = [
    {
      title: 'contentOne',
      buttonCopy: 'Open Content 1',
      content: <p>Content 1</p>,
      ref1: useRef(null) // for now - to be last
    },
    {
      title: 'contentTwo',
      buttonCopy: 'Open Content 2',
      content: (
        <>
          <p>Content 2</p>
          <p>Content 2</p>
        </>
      ),
      ref2: useRef(null) // for now - to be last
    }
  ]

  return (
    accordion.map(section => {
      const ref = Object.keys(section).pop()

      return (
        <AccordionSection
          accordion={accordion}
          section={section}
          reference={ref}
          key={section.title}
        />
      )
    })
  )
}

export default Accordion
