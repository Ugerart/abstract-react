import React, { FC } from 'react';
import './_section.scss';

interface SectionProps {
  children?: any,
  title?: string,
  type?: string,
}


const Section: FC<SectionProps> = ({ children, title, type }) => {
  
  
  return (
    <section className={ type ? 'section-' + type : 'section-dafault' }>
      <div className="container">
        { title && (
          <h2>
            {`${title}`}
          </h2>
        ) }
        { children && (
          <div className="content">
            { children }
          </div>
        ) }
      </div>
    </section>
  )
}

export default Section