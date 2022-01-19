import React from 'react'
import ListItemComponent from './ListItemComponent'
import { FlexContainer, colors } from '../Styles/Styles'
import MenuComponents from './MenuComponents'
const Courierpackages = () => {
  return (
    <>
      <MenuComponents></MenuComponents>
      {/* List of packages nearby */}
      <FlexContainer orientation='v' height='100%'>
        <ListItemComponent
          address='Szkolna 17'
          weight='4.5'
          distance='0.9'
          background={colors.lightBlue}></ListItemComponent>
        <ListItemComponent
          address='Szkolna 18'
          weight='3.2'
          distance='0.5'
          background={colors.lightYellow}></ListItemComponent>
        <ListItemComponent
          address='Szkolna 19'
          weight='4.4'
          distance='0.9'
          background={colors.lightBlue}></ListItemComponent>
        <ListItemComponent
          address='Szkolna 20'
          weight='3.5'
          distance='1'
          background={colors.lightBlue}></ListItemComponent>
      </FlexContainer>
    </>
  )
}

export default Courierpackages
