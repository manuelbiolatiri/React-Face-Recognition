import React from 'react'
import Tilt from 'react-tilt'
import 'tachyons'

const Logo =()=>{
	return (
			<div className='ma4 mt0' style={{justifyContent:'space-around'}}>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
				 <div className="Tilt-inner"><span role="img"> 👽 </span></div>
				</Tilt>
			</div>
		)
}

export default Logo