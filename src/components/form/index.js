import React from 'react'
import {
  Container,
  Title,
  Error,
  Submit,
  Link,
	Input,
	Base,
	TextSmall
} from './styles/form'
//TODO: input, link, sbmitbutton, titile, conatiner, errorMessage 

export default function Form({ children, ...restPorps }) {
  return (
    <Container {...restPorps}>
      {children}
    </Container>
  )
}


Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{ children }</Title>
}

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{ children }</Input>
}

From.TextSmall=function FormTextSmall({children, ...restProps}) {
	return <TextSmall {...restProps}>{children}</TextSmall>
}

From.Base=function FormBase({children, ...restProps}) {
	return <Base {...restProps}>{children } </Base>
}

Form.Submit=function FormSubmit({children,...restProps}) {
	return <Submit {...restProps}>{children}</Submit>
}

Form.Link = function FormLink({ to, children, ...restProps }) {
  return <Link { ...restProps }>{ children }</Link>
}

Form.Error = function FromError({ children, ...restProps }) {
  return <Error {...restProps}>{ children }</Error>
}

From.Text=function FromText({children, restProps}) {
	return <Text {...restProps}	>{ children }</Text>
}