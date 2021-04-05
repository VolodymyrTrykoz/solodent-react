import React from 'react';
import examplesInfo from './exampes-info';

const Examples = () => {
  return(
    <div className="examples">
      <div className="container">
        <h2 className="title">
          <span className="before">
            Наші роботи
          </span>
        </h2>
        <div className="examples-wrapper">
          {
            examplesInfo.map(({id, title, description}) => (
              <div className="examples-item"
                key={id}
              >
                <img src={`/examples/example${id}.jpg`} alt=""/>
                <div className="examples-item-text-block">
                  <div className="examples-item-title">{ title }</div>
                  <div className="examples-item-description">{ description }</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Examples;