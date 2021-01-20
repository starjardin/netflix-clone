import React from 'react'

import { Container, Row, Column, Title, Break, Link, Text } from "./styels/footer"

export default function Footer({ children, ...resProps }) {
  return (
    <Container {...resProps}>
      {children}
    </Container>
  )
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{ children }</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{ children }</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{ children }</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{ children }</Title>
}
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{ children }</Text>
}

Footer.Break = function FooterBreak() {
  return <Break ></Break>
}
