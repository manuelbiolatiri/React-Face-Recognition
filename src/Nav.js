import React from 'react'
import Tilt from 'react-tilt'
import 'tachyons'

const Nav = ({onRouteChange, isSignedIn}) => {

		if (isSignedIn) {
			return (
				<nav style={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>
					<div>
						<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
						 	<div className="Tilt-inner"><img src="blacklogo.png" alt=""/></div>
						</Tilt>
					</div>
					<div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
						<p className='f3 dim black underline pa3 pointer Link' onClick={()=>onRouteChange('signout')}>Sign Out</p>
					</div>
				</nav>
			)
		} else {
			return (
				<div style={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>
					<div>
						<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
						 	<div className="Tilt-inner"><img src="blacklogo.png" alt=""/></div>
						</Tilt>
					</div>
					<div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
						<p className='f3 dim black underline pa3 pointer Link' onClick={()=>onRouteChange('signin')}>Sign In</p>
						<p className='f3 dim black underline pa3 pointer Link' onClick={()=>onRouteChange('register')}>Register</p>
					</div>
				</div>
				)
		}

}

export default Nav