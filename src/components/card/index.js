import React, { createContext, useContext, useState } from 'react'

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Entities,
  Item,
  Image,
  Feature,
  FeatureTitle,
  FeatureClose,
  FeatureText,
  Content,
  Meta,
  Maturity,
} from './styles/card'

const FeatureContext = createContext()

export default function Card({ children,...restProps }) {
  const [ showFeature,setShowFeature ] = useState(false)
  const [ itemFeature,setItemFeature ] = useState({})
  
  return <FeatureContext.Provider value={ {
      showFeature,
      setShowFeature,
      itemFeature,
      setItemFeature,
  }}>
    <Container {...restProps}>{children}</Container>
  </FeatureContext.Provider>
}

Card.Group = function CardGroup({ children,...restProps }) {
  return <Group {...restProps}>{ children }</Group>
}

Card.Title = function CardTitle({ children,...restProps }) {
  return <Title {...restProps}>{ children }</Title>
}
Card.SubTitle = function CardSubTitle({ children,...restProps }) {
  return <SubTitle {...restProps}>{ children }</SubTitle>
}
Card.Text = function CardText({ children,...restProps }) {
  return <Text {...restProps}>{ children }</Text>
}
Card.Entities = function CardEntities({ children,...restProps }) {
  return <Entities {...restProps}>{ children }</Entities>
}

Card.Meta = function CardMeta({ children,...restProps }) {
  return <Meta {...restProps}>{ children }</Meta>
}

Card.Item = function CardItem({ item,children,...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)
  return (
    <Item
      { ...restProps }
      onClick={ () => setItemFeature(item) }
      onClick={ () => setShowFeature(true) }
    >
      { children }
    </Item>)
}

Card.Image = function CardImage({ children,...restProps }) {
  return <Image {...restProps}>{ children }</Image>
}

Card.Feature = function CardFeature({ children,...restProps }) {
  const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext)
  return showFeature ? (
    <Feature
      {...restProps}
      src={ `/images/${ category }/${ itemFeature.genre }/${ itemFeature.slug }/large.jpg` }
    >
      <Content>
        <FeatureTitle>{itemFeature.genre}</FeatureTitle>
        <FeatureClose>{itemFeature.description}</FeatureClose>
        <FeatureClose
          onClick={() => setShowFeature(false)}
        >
          <img src='/images/icons/close.png' alt="Close" />
        </FeatureClose>
        <Group
          margin="30px 0"
          flesDirection="row"
          alignItems="center"
        >
          <Maturity
            rating={itemFeature.maturity}
          >
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.chartAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
      </Content>
      {children}
    </Feature>
  ) : null
}