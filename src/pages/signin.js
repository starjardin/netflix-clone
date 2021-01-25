import React,{ useState,useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/form'
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import * as ROUTES from '../constants/routes';

export default function Signin() {
	const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
		event.preventDefault();
		console.log("Hello world");

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
	
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