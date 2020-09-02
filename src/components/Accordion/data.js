import React from 'react'

const accordionData = [
  {
    title: 'contentOne',
    buttonCopy: 'Open Content 1',
    content: <p>Content 1</p>
  },
  {
    title: 'contentTwo',
    buttonCopy: 'Open Content 2',
    content: (
      <>
        <p>Content 2</p>
        <p>Content 2</p>
      </>
    )
  }
]

export default accordionData
