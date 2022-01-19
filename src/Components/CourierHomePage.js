import React from 'react'
import { FlexContainer, GearIconStyle, colors } from '../Styles/Styles'
import { ReactComponent as GearIcon } from '../Icons/gear-icon.svg'
import ListItemComponent from './ListItemComponent'
import MenuComponents from './MenuComponents'

function CourierHomePage(props) {
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
        Hello, Kacper!
      </div>

      {/* Active errands and history container */}
      <FlexContainer orientation='v' height='100%'>
        {/* Active */}
        <div
          style={{
            color: colors.lightYellow,
            fontSize: '2.05rem',
            fontWeight: 'bold',
            textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.1)',
          }}>
          Active errand
        </div>
        {/* Active errands List */}
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'
          background={colors.lightYellow}></ListItemComponent>

        {/* History */}
        <div
          style={{
            color: colors.lightBlue,
            fontSize: '2.05rem',
            fontWeight: 'bold',
            textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.1)',
            marginTop: '1rem',
          }}>
          History
        </div>

        {/* History errands List */}
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'></ListItemComponent>
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'></ListItemComponent>
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

export default CourierHomePage
