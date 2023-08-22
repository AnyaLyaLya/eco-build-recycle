import { useState } from "react";
import { accordionData } from "../../utils/accordionData";
const rubbish = require('../../image/rubbish.png');

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          className={`accordion__item ${activeIndex === index ? 'accordion__item--active' : ''}`}
          key={index}
        >

          <div className="accordion__top"  onClick={() => handleAccordionClick(index)}>
            <div className="accordion__top--first">
              <p className="accordion__index">{`0${index + 1}`}</p>

              <div className="accordion__title">
                {item.title}
              </div> 
            </div>
                    

            <div className={`accordion__arrow ${activeIndex === index ? 'accordion__arrow--active' : ''}`}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="accordion__svg">
                <path d="M35 0.499997C54.0538 0.499999 69.5 15.9462 69.5 35C69.5 54.0538 54.0538 69.5 35 69.5C15.9462 69.5 0.500002 54.0538 0.500005 35C0.500007 15.9462 15.9462 0.499994 35 0.499997Z" stroke="#524A48"/>
                <path d="M34.9999 48.6957L34.9999 22.3189M34.9999 22.3189L22.1779 35.5073M34.9999 22.3189L47.822 35.5073" stroke="#B0B0B0" stroke-width="2"/>
              </svg>
            </div>
          </div>
          
          <div className="accordion__content">
            <div className="accordion__info">
              <p className="accordion__info--content">{item.content}</p>
              <p className="accordion__info--list-title">{item.listTitle}</p>
              <ol className="accordion__info--list">
                {item.listItems.map((listItem, i) => (
                  <li key={i} className='accordion__info--item'>{listItem}</li>
                ))}
              </ol>
            </div>
            
            <img src={rubbish} alt={item.title} />
          </div>  
        </div>
      ))}
    </div>
  );
};