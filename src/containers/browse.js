import React, { useState } from 'react'
import {Header} from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import FooterContanier from './footer'
import {SelectProfileContainer} from './profiles'

export default function BrowseContainer() {
  
  const [ profile, setProfile ] = useState({})
  const user = {
    displayName: 'Honey',
    photoURL : 1
  }
  
  return profile.displayName ? (
    <React.Fragment>
      <p>Browse Container</p>
      <FooterContanier />
    </React.Fragment>)
    : (
      <SelectProfileContainer user={ user } setProfile={setProfile}/>
    )
}
