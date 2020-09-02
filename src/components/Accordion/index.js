import React, { useState, useRef } from 'react'
import './index.scss'

const Accordion = () => {
  const [state, setState] = useState([])
  const [heightState, setHeightState] = useState({
    contentOne: '0',
    contentTwo: '0'
  });

  const content1 = useRef(null)
  const content2 = useRef(null)

  const handleClick = e => {
    const { name } = e.target

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
        [name]: name === 'contentOne'
          ? `${content1.current.scrollHeight}px`
          : `${content2.current.scrollHeight}px`
      });
    }
  }

  return (
    <>
      <div className={state.includes('contentOne') ? 'open' : 'closed'}>
        <button name="contentOne" onClick={handleClick}>Open content 1</button>
        <div className="content" ref={content1}
          style={{ height: `${heightState.contentOne}` }}>
          Content 1
        </div>
      </div>
      <div className={state.includes('contentTwo') ? 'open' : 'closed'}>
        <button name="contentTwo" onClick={handleClick}>Open content 2</button>
        <div className="content" ref={content2}
          style={{ height: `${heightState.contentTwo}` }}>
          <p>Content 2</p>
          <p>Content 2</p>
        </div>
      </div>
    </>
  )
}

export default Accordion
