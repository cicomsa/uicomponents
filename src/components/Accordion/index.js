import React, { useState } from 'react'
import './index.scss'

const Accordion = () => {
  const [state, setState] = useState([])

  const handleClick = e => {
    const { name } = e.target

    if (state.includes(name)) {
      const array = [...state]
      const index = state.indexOf(name);
      if (index > -1) {
        array.splice(index, 1);
      }
      setState(array)
    } else {
      setState([...state, name])
    }
  }

  return (
    <div>
      <div className={state.includes('contentOne') ? 'open' : 'closed'}>
        <button name="contentOne" onClick={handleClick}>Open content 1</button>
        <div className="content">
          Content 1
        </div>
      </div>
      <div className={state.includes('contentTwo') ? 'open' : 'closed'}>
        <button name="contentTwo" onClick={handleClick}>Open content 2</button>
        <div className="content">
          Content 2
        </div>
      </div>
    </div>
  )
}

export default Accordion
