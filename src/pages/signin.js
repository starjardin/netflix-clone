import React, { useState } from 'react'
import Form from '../components/form'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'

console.log();

export default function Signin() {
	const [error,setError]=useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [ password,setPassword ] = useState('')
	
	const isInvalid = emailAddress.trim() === "" | password.trim() === "" 
	
	const handleSignin = e => {
		e.preventDfault()
		
	}
	
	return (
		<React.Fragment>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error&&<Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email"
							value={ emailAddress }
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder="password"
							type="password"
							value={ password }
							autoComplete="off"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sing in
						</Form.Submit>
						<Form.Text>
		            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>
		          This page is protected by Google reCAPTCHA to ensure you're not a robot. Learn more.
		        </Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />										
		</React.Fragment>
	)
}