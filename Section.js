import React, { Children } from 'react'

const Section = ({Children,headingText, headingLevel}) => {
    const H = `h${headingLevel}`;

  return (
    <section>
        <H>{headingText}</H>
        {Children}
    </section>
  )
}

export default Section;