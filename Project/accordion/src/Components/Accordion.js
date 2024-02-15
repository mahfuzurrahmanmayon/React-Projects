import React, { useState } from 'react'
import './Accordion.css'
import accordionItems from './Data'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  const collapseAccordion = (getCurrentId)=>{
    setSelected(getCurrentId && getCurrentId === selected ? !getCurrentId : getCurrentId)
  }
  return (
    <div className='accordion-container'>
        <div className='button-box'>
            <button onClick={toggleAccordion}>{isAccordionOpen ? "Collapse All" : "Expand All"}</button>
        </div>
        <div>
            {accordionItems && accordionItems.length > 0 ? (
                accordionItems.map((accordion) => (
                    <div className='accordion-item' key={accordion.id}>
                    <div onClick={() => collapseAccordion(accordion.id)} className='accordion-top'>
                        <div className='accordion-title'>{accordion.question}</div>
                        <span>{selected === accordion.id || isAccordionOpen ? <FaMinus /> : <FaPlus />}</span>
                    </div>
                        {selected === accordion.id ? <div className='accordion-answer'>{accordion.answer}</div> : null}
                        {isAccordionOpen ? <div className='accordion-answer'>{accordion.answer}</div> : null}
                    </div>
                ))
                ) : (
                <div className='no-data'>Data not found</div>
            )}
        </div>
    </div>
  )
}

export default Accordion