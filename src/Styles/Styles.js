import styled, { createGlobalStyle, keyframes, css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MapContainer } from 'react-leaflet'
import { ReactComponent as RefreshIcon } from '../Icons/refresh-icon.svg'

export const colors = {
  darkBlue: '#31A2C6',
  lightBlue: '#ADDCEB',
  lighterBlue: '#DBECF1',
  lightYellow: '#FFD56A',
  darkYellow: '#DEAE33',
  shadow1: 'rgba(0,0,0,0.1)',
}

const globalPadding = '1rem'

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
html,body{
    width:100%;
    min-height:100vh;
    height:100%;
    
    font-family: 'Montserrat', sans-serif;
    
    margin:0;
}

body{
    padding-top: ${globalPadding};
  overflow-y: scroll;

}
#root{
  width: 100%;
  max-width: 800px;
  height: 100%;

  margin: 0 auto;
}
`

export const FlexContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  height: ${(props) => (props.height ? props.height : '100%')};

  display: flex;
  flex-direction: ${(props) => {
    return props.orientation === 'h' ? 'row' : 'column'
  }};
  justify-content: ${(props) => {
    return props.justifyContent ? props.justifyContent : 'center'
  }};
  align-items: ${(props) => {
    return props.alignItems ? props.alignItems : 'center'
  }};

  margin: 0 auto;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: ${(props) => {
    return props.fontSize ? props.fontSize : '1.5rem'
  }};
  color: ${(props) => {
    return props.color ? props.color : colors.darkBlue
  }};
  text-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
`

export const ListItem = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  place-items: center;

  background-color: ${(props) => {
    return props.background ? props.background : colors.lightBlue
  }};
  font-weight: 500;
  margin: 0.8rem auto;
  padding: 0.8rem;
  border-radius: 0.6rem;
`

export const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  bottom: 1rem;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 100;
`

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${colors.darkBlue};
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  & .icon {
    fill: ${colors.darkBlue};
  }

  &.active {
    background-color: ${colors.darkBlue};
    color: white;
    & .icon {
      fill: white;
    }
  }
`

export const GearIconStyle = {
  width: '2rem',
  height: '2rem',

  cursor: 'pointer',
  position: 'fixed',
  top: globalPadding,
  right: globalPadding,
}

export const LeftArrowIconStyle = {
  width: '2rem',
  height: '2rem',

  cursor: 'pointer',
  position: 'fixed',
  top: globalPadding,
  left: globalPadding,
}

export const IconStyle = {
  marginRight: '0.3rem',
  width: '36',
  height: '36',
}

export const UndrawIconStyle = {
  width: '90%',
  minWidth: '100',
  maxWidth: '500',
  aspectRatio: '1',
}

const rotate = keyframes`
  from {transform: rotate(0deg) scaleY(0.97)};
  to {transform: rotate(-360deg) scaleY(0.97)};
`

const anim = css`
  ${rotate} 2s infinite both linear;
`

export const RefreshIconStyle = styled(RefreshIcon)`
  margin-top: 1.5rem;
  animation: ${anim};
`

export const FormStyled = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 95%;
  height: fit-content;

  background-color: ${colors.lightBlue};
  border: none;
  outline: none;
  border-radius: 1.5rem;

  text-align: center;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;

  padding: 1rem;
  margin-top: 0.5rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);

  transition: all 200ms ease-in-out;

  &::placeholder {
    background-color: ${colors.lightBlue};
    color: ${colors.darkBlue};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 10rem ${colors.lightBlue} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 10rem ${colors.lightBlue} inset; /*your box-shadow*/
    -webkit-text-fill-color: #000;
  }

  &:focus {
    transform: scale(1.05);
  }
`

export const InputPhoto = styled.div`
  width: 95%;
  height: fit-content;

  background-color: ${colors.lightBlue};

  border: none;
  border-radius: 1.5rem;

  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: #000;

  padding: 1rem;
  margin-top: 0.5rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);

  transition: all 200ms ease-in-out;

  & input[type='file'] {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    width: fit-content;
    height: fit-content;
    text-align: center;
    max-width: fit-content;
  }

  & input[type='file']::-webkit-file-upload-button {
    display: none;
  }

  & input[type='file']::placeholder {
    background-color: ${colors.lightBlue};
    color: ${colors.darkBlue};
  }

  & input[type='file']:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 10rem ${colors.lightBlue} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: #000;
  }

  & input[type='file']:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 10rem ${colors.lightBlue} inset; /*your box-shadow*/
    -webkit-text-fill-color: #000;
  }
`

export const Button = styled.input`
  width: 50%;
  height: fit-content;
  justify-self: flex-end;

  background-color: ${colors.darkBlue};
  border: none;
  outline: none;
  border-radius: 1.3rem;

  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;

  padding: 1rem 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);

  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const SearchBar = styled.input`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: calc(100% - 1rem);
  height: 3.25rem;
  background-color: ${colors.lighterBlue};
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0.5rem 0.5rem 1rem ${colors.shadow1};
  outline: none;
  padding-left: 5rem;
  font-size: 1.3rem;
  color: ${colors.darkBlue};
  letter-spacing: 0.05rem;
  z-index: 100;
`

export const SearchIconStyle = {
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  top: `calc(0.2rem + ${globalPadding})`,
  left: `calc(0.5rem + ${globalPadding})`,
  zIndex: 100,
}

export const XIconStyle = {
  width: '1.5rem',
  height: '1.5rem',
  position: 'absolute',
  top: `calc(0.3rem + ${globalPadding})`,
  right: `calc(0.5rem + ${globalPadding})`,
  zIndex: 100,
}

export const MapContainerStyled = styled(MapContainer)`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
`

export const LabelStyled = styled.label`
  font-size: 1.25rem;
  margin-top: 0.5rem;
`

export const DialogSlider = styled.div`
  width: 100%;
  height: 20%;
  position: fixed;
  bottom: -20%;
  left: 0;
  border-radius: 0.15rem 0.15rem 0 0;
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 2000;
  background-color:white;
  transition: all 200ms;
`