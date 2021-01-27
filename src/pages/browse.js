import React from 'react'

import BrowseContainer from '../containers/browse'
import {selectionMap} from '../utils'

import { useContent } from "../hooks"

export default function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  
  const sildes = selectionMap({ series,films })
  
  return (
    <BrowseContainer sildes={sildes}/>
  )
}
