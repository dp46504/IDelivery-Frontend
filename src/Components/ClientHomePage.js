import React from 'react'
import { FlexContainer, GearIconStyle, colors } from '../Styles/Styles'
import { ReactComponent as GearIcon } from '../Icons/gear-icon.svg'
import ListItemComponent from './ListItemComponent'
import MenuComponents from './MenuComponents'

function ClientHomePage(props) {
  return (
    <>
      {/* GearIcon */}
      <GearIcon fill={colors.darkBlue} style={GearIconStyle} />
      {/* Menu Component */}
      <MenuComponents></MenuComponents>

      {/* Title Welcome user Text */}
      <div
        style={{
          color: colors.darkBlue,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.25)',
        }}>
        Hello, Wojciech!
      </div>

      {/* Awaiting errands container */}
      <FlexContainer orientation='v' height='100%'>
        {/* Awaiting errands */}
        <div
          style={{
            color: colors.lightBlue,
            fontSize: '2.05rem',
            fontWeight: 'bold',
            textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.1)',
            marginTop: '1rem',
          }}>
          Awaiting errands
        </div>

        {/* Awaiting errands List */}
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'></ListItemComponent>
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'></ListItemComponent>
      </FlexContainer>
    </>
  )
}

export default ClientHomePage
