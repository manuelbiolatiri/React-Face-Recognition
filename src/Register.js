import React from 'react'
import 'reactstrap'

const Register =({onRouteChange})=>{
	return (
			<div className="row mt-5">
				<div className="col-md-4 m-auto">
					<div className='jumbotron'>
						<h1>Register</h1>
						<div className='formGroup'>
							<input type='text' className='formControl' name='name' placeholder="Fullname"/><br/><br/>
							<input type='email' className='formControl' name='email' placeholder="Email"/><br/><br/>
							<input type='password' className='formControl'name='password' placeholder="Password"/><br/><br/>
							<input type='submit'  className='btn btn-success ' onClick={()=>onRouteChange('home')} value='Register'/>
							</div>
					</div>
				</div>
			</div>
		)

}
export default Register