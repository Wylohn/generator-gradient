import React, {useEffect, useState} from "react";

export default function Gradient ({color1, breakPoint1, color2, breakPoint2, color3, breakPoint3, angle}) {
    
    const [gradient, setGradient] = useState('');

    useEffect(() => {
        setGradient('linear-gradient(' + angle + 'deg, ' + color1 + ' ' + breakPoint1 + '%, ' + color2  + ' ' +  breakPoint2 + '%, ' + color3  + ' ' +  breakPoint3 + '%) ')  
    });

    return (
        <div className="gradient">
            <div className='gradient_frame' style={{background: gradient, background: '-moz-' + gradient, background: '-webkit-' + gradient}}></div>
            <h3 className='gradient_cssRef'>{gradient}</h3>
        </div>
    )
}

