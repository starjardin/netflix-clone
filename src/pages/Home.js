import React from 'react'

import FooterContanier from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import AccordionContainer from '../containers/faqs'
import HeaderContainer from '../containers/header'
import { OptForm, Feature } from '../components'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies. TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Join the conversation</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
          </Feature>
      </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <FooterContanier></FooterContanier>
    </>
  )
}

