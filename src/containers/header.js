import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({ children, ...restProps }) {
  return <Header>
          <Header.Frame>
            <Header.Logo
              to={ ROUTES.HOME }
               src='/images/misc/logo.svg'
               alt='netflix' />
          <Header.ButtonLink to={ROUTES.SIGN_IN} />
        </Header.Frame>
         { children }
    </Header>
}