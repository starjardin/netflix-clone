import React from 'react'
import { Item } from './styles/jumbotron'
import { Inner } from './styles/jumbotron'

export function Jumbotron({ children, direction = "row", ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer() {
  
}