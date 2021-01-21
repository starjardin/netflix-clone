import styled from 'styled-components'

export const Container = styled.section`
  display : flex;
  border-bottom : 8px solid #222;
`
export const Inner = styled.div`
  display : flex;
  flex-direction : column;
  padding : 70px 45px;
  max-width : 815px;
  margin : auto;
`
export const Item = styled.div`
  color : #fff;
  margin-bottom : 10px;
  &:first-of-type {
    margin-top : 3em;
  }
`
export const Title = styled.div`
  font-size : 50px;
  line-height : 1.1;
  margin-top : 0;
  margin-bottom : 8px;
  color : #fff;
  text-align : center;

  @media (max-width : 600px) {
    font-size : 35px;
  }
`
export const Header = styled.div`
  display : flex;
  justify-content : space-between;
  cursor : pointer;
  margin-bottom : 1px;
  font-weight : normal;
  font-size : 26px;
  background-color : #303030;
  user-select : none;
  align-items : center;
  box-sizing : border-box;
  padding : 0.8em 1.2em;

  img {
    filter : brightness(0) invert(1);
    width : 24px;
  }

  @media (max-width : 600px) {
    font-size : 16px;
  }
`
export const Body = styled.div`
  max-width : 1200px;
  font-weight : normal;
  transition : max-height .25s cubic-bezier(0.5, 0, 0.1, 1);
  cursor : pointer;
  margin-bottom : 1px;
  background-color : #303030;
  user-select : none;
  align-items : center;
  box-sizing : border-box;
  padding : 0.8em 1.2em;

  @media (max-width : 600px) {
    font-size : 16px;
    line-height : 22px;
  }
`

export const Frame = styled.div`
  margin-bottom : 40px;
  max-width : 1200px;
`