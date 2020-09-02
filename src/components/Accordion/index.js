import React, { useState } from 'react'
import './index.scss'

const Accordion = () => {
  const [state, setState] = useState({ open: '' })

  const handleClick = e => {
    const { name } = e.target

    setState({ open: name })
  }
  return (
    <div>
      <div className={state.open === 'contentOne' ? 'open' : 'closed'}>
        <button name="contentOne" onClick={handleClick}>Open content 1</button>
        <div className="content">
          Content 1
        </div>
      </div>
      <div className={state.open === 'contentTwo' ? 'open' : 'closed'}>
        <button name="contentTwo" onClick={handleClick}>Open content 2</button>
        <div className="content">
          Content 2
        </div>
      </div>
    </div>
  )
}

export default Accordion
