import React from 'react'
import './FaceRecognition.css'
const FaceRecognition =({imgUrl, box})=>{
	return (
			<div className="center ma mt-3">
				<div className="absolute m2">
					<img id="inputimage" src={imgUrl} alt="" height="auto" width="500px"/>
					<div className="bounding_box" style={{top: box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
				</div>
			</div>
		)
}

export default FaceRecognition