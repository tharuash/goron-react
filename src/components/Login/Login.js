import React, {Component} from 'react';

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email : '',
			password : ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Login</h3>

				<div className='form-group'>
					<label>Email address</label>
					<input
						name='email'
						type='email'
						className='form-control'
						placeholder='Enter email'
						onChange={this.handleInputChange}
					/>
				</div>

				<div className='form-group'>
					<label>Password</label>
					<input
						name='password'
						type='password'
						className='form-control'
						placeholder='Enter password'
						onChange={this.handleInputChange}
					/>
				</div>

				<div className='form-group'>
					<div className='custom-control custom-checkbox'>
						<input
							type='checkbox'
							className='custom-control-input'
							id='customCheck1'
						/>
						<label className='custom-control-label' htmlFor='customCheck1'>
							Remember me
						</label>
					</div>
				</div>

				<button type='submit' className='btn btn-primary btn-block'>
					Submit
				</button>
				<p className='forgot-password text-right'>
					Forgot <a href='#'>password?</a>
				</p>
			</form>
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		let body = {
			id : 1,
			tokenString : 'sdssdsd'
		}

		const apiUrl = 'http://localhost:8080/';
    	fetch(apiUrl, {
			method : 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body : JSON.stringify(body)
		})
      		.then((response) => response.json())
      		.then((data) => {
				  alert('This is your data' +  data.tokenString )
				  localStorage.setItem("ACCESS_TOKEN", data.id);
				  this.props.history.push('/sign-up')
				});
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
	
		this.setState({
		  [name]: value
		});
	  }
}
