import React from 'react'
import { useState } from 'react'

import Gradient from './Gradient';

export default function ColorPicker() {

    const [color1, setColor1] = useState("#fdbb2d");
    const [breakPoint1, setbreakPoint1] = useState(10);
    
    const [color2, setColor2] = useState("#7585be");
    const [breakPoint2, setbreakPoint2] = useState(50);

    const [color3, setColor3] = useState("#22c1c3");
    const [breakPoint3, setbreakPoint3] = useState(80);

    const [angle, setAngle] = useState("120");

  return (
    <>
        <section className='interface'>
            <div className='interface_color'>
                <strong>Couleur 1</strong>
                <input id="c1" type="color" value="#fdbb2d" onChange={() => {setColor1(document.getElementById('c1').value)}}></input>
                <input id="bp1" type="range" min="0" max="100" onChange={() => {setbreakPoint1(document.getElementById('bp1').value)}}></input>
            </div>
            <div className='interface_color'>
                <strong>Couleur 2</strong>
                <input id="c2" type="color" value="#7585be" onChange={() => {setColor2(document.getElementById('c2').value)}}></input>
                <input id="bp2" type="range" min="0" max="100" onChange={() => {setbreakPoint2(document.getElementById('bp2').value)}}></input>

            </div>
            <div className='interface_color'>
                <strong>Couleur 3</strong>
                <input id="c3" type="color" value="#22c1c3" onChange={() => {setColor3(document.getElementById('c3').value)}}></input>
                <input id="bp3" type="range" min="0" max="100" onChange={() => {setbreakPoint3(document.getElementById('bp3').value)}} ></input>

            </div>
            <div className='interface_angle'>
                <strong>Angle</strong>
                <input id='angle' type="range" min="0" max="360" onChange={() => {setAngle(document.getElementById('angle').value)}}></input>

            </div>
        </section>
        <Gradient color1={color1} breakPoint1={breakPoint1} color2={color2} breakPoint2={breakPoint2} color3={color3} breakPoint3={breakPoint3} angle={angle} />
    </>
  )
}

