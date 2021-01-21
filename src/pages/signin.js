import React, { useState } from 'react'
import {Form} from '../components/form'
import HeaderContainer from '../containers/header'

export default function Signin() {
	
	const [error,setError]=useState('')
	
	return <HeaderContainer>
		<Form>
			<Form.Title>Sign in</Form.Title>
			{error&&<Form.Error>{error}</Form.Error>}
		</Form>
	</HeaderContainer>
}