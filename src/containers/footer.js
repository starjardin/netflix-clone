import React from 'react'
import { Footer } from "../components"

export default function FooterContanier() {
  return <Footer>
      <Footer.Title>Question, Contact us?</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor relation</Footer.Link>
          <Footer.Link href="#">Ways to watch</Footer.Link>
          <Footer.Link href="#">Corporate Informations</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
      </Footer.Column>
      <Footer.Column>
          <Footer.Link href="#">Help center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media center</Footer.Link>
          <Footer.Link href="#">Buy gift Cards</Footer.Link>
          <Footer.Link href="#">Cookies preferences</Footer.Link>
          <Footer.Link href="#">Legal notices</Footer.Link>
        </Footer.Column>
   
      </Footer.Row>
    </Footer>
}
