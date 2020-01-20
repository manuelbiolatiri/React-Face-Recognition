import React from 'react'
// import 'reactstrap'
import 'tachyons'

const SignIn =({onRouteChange})=>{
	return (
			<div className="row mt-5">
				<div className="col-md-4 m-auto">
					<div className='jumbotron'>
						<h1>Sign In</h1>
						<div className='formGroup'>
							<input type='email' className='formControl' name='email' placeholder="Email" /><br/><br/>
							<input type='password' className='formControl'name='password' placeholder="Password"/><br/><br/>
							<input type='submit'  className='btn btn-success ' onClick={()=>onRouteChange('home')} value='Sign In'/><br/><br/>
							<input className="Link pointer" onClick={()=>onRouteChange('register')} type='submit' value='Register'/>
							</div>
					</div>
				</div>
			</div>
		)

}
export default SignIn