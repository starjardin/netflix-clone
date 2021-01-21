import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {Background, Container, Logo, ButtonLink, Frame  } from './styles/header'

export default function Header({ bg="true", children, ...restProps }) {
  return bg ? <Background { ...restProps }>{ children }</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame { ...restProps }>{ children }</Frame>
}

Header.Container = function ({ children, ...restProps }) {
  return <Container { ...restProps } >{ children }</Container>
}

Header.Logo = function HeaderLogo({to, children, ...restProps  }) {
  return <ReachRouterLink to={ to }>
    <Logo { ...restProps }/> 
  </ReachRouterLink>
}

Header.ButtonLink = function ({ children, ...restProps }) {
  return <ButtonLink { ...restProps} >{ children }</ButtonLink>
}
