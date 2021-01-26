import React from 'react'
import { Spinner,LockBody,ReleaseBody,Picture } from './styles/laoding'

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`}/>
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody({ children,...restProps }) {
  return <ReleaseBody {...restProps}>{ children }</ReleaseBody>
}