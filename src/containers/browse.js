import React, { useState, useEffect } from 'react'
import { Header, Loading, Card} from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import FooterContanier from './footer'
import { SelectProfileContainer } from './profiles'

export default function BrowseContainer() {
  
  const [ profile, setProfile ] = useState({})
  const [ loading,setLoading ] = useState(true)
  const [ category,setCategory ] = useState('series')
  const [ searchTerm,setSearchTerm ] = useState('');
  const [ slideRows, setSlideRows] = useState([])
  
  const user = {
    displayName: 'Honey',
    photoURL : 1
  }
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[ user ])
  
  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category])
  
  return profile.displayName ? (
    <React.Fragment>
      {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src='/images//misc/logo.svg' alt="Netflix"/>
            <Header.Link
              active={ category === 'series' ? 'true' : 'false' }
              onClick={ () => setCategory("series") }
            >Series</Header.Link>
            <Header.Link
              active={ category === 'films' ? 'true' : 'false' }
              onClick={ () => setCategory("films") }
            >Films</Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm }>
              <Header.Profile>
                <Header.Picture src={ user.photoURL } />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={ user.photoURL } />
                    <Header.Link onClick={() => FirebaseContext.auth().signOut()}>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link>Sign out</Header.Link>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Search>
          </Header.Group> 
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      
      <Card.Group>
        { slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowercase()}`} >
            <Card.Title >{slideItem}</Card.Title>
            <Card.Entities >
              { slideItem.data.map(item => (
                <Card.Item key={ item.docId } item={ itme }>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle >{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item> 
              ))}
            </Card.Entities>
          </Card>
        ))}
      </Card.Group>
      
      <FooterContanier />
    </React.Fragment>)
    : (
      <SelectProfileContainer user={ user } setProfile={setProfile}/>
    )
}
