import React, { useState, useRef } from 'react'
import './index.scss'

const Accordion = () => {
  // data
  const accordion = useRef => [
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

  // logic
  const [state, setState] = useState([])
  const [heightState, setHeightState] = useState({});

  const handleClick = e => {
    const { name } = e.target
    const section = accordion.find(section => section.title === name)
    const ref = Object.keys(section).pop()

    if (state.includes(name)) {
      const array = [...state]
      const index = state.indexOf(name);
      if (index > -1) {
        array.splice(index, 1);
      }
      setState(array)
      setHeightState({ ...heightState, [name]: '0' })
    } else {
      setState([...state, name])
      setHeightState({
        ...heightState,
        [name]: `${section[ref].current.scrollHeight}px`
      })
    }
  }

  return (
    accordion.map(section => {
      const ref = Object.keys(section).pop()

      return (
        <div
          key={section.title}
          className={state.includes(section.title) ? 'open' : 'closed'}
        >
          <button name={section.title} onClick={handleClick}>
            {section.buttonCopy}
          </button>
          <div
            className="content"
            ref={section[ref]}
            style={{
              height: `${
                heightState[section.title] ? heightState[section.title] : '0'
                }`
            }}
          >
            {section.content}
          </div>
        </div>
      )
    })
  )
}

export default Accordion
