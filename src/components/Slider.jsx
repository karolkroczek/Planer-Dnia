import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Slider.css'

function Slider({Sliders}) {
    const [slideIndex,setslideIndex]= useState(0)
    const SlidersLength = Sliders.length

    setInterval(()=>{
        setslideIndex(slideIndex===SlidersLength-1?0:slideIndex+1)
    },10000)

    const renderSliders = Sliders.map((slider,index)=>
        <div key={index} className={(slideIndex===index)?'slider-img':'slider-img unactive'}>
        <img src={slider.url} alt={slider.caption} />
        <p>{slider.caption}</p>
        </div>
    )

  return (
    <div className='slider'>
        {renderSliders}
    </div>
  )
}

export default Slider