import React from 'react'

import FooterContanier from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import AccordionContainer from '../containers/faqs'

export default function Home() {
  return (
    <>
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <FooterContanier></FooterContanier>
    </>
  )
}
