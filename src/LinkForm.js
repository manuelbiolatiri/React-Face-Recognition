import React from 'react'
import  {Container, Col, Form,
  FormGroup, Label, Input,
  Button} from 'reactstrap'
import 'tachyons'
const LinkForm =({onInputChange, onButtonSubmit})=>{
	return (
		<div className="row mt-5">
			<div className="Col-lm-6 m-auto">
				<p className='f3'>
			       {'This Magic Brain will detect faces in your pictures. Git it a try.'}
			     </p>
			<div className='jumbotron m-auto honeycomb'>
				<Form className='FormGroup'>
					<input type='text' className='FormControl' onChange={onInputChange}/>
					<Button  className='btn ml-2' onClick={onButtonSubmit}>Detect</Button>
				</Form>
			</div>
		</div>
	</div>
		)
}

export default LinkForm