import React, { useState } from 'react'
import ListItemComponent from './ListItemComponent'
import { FlexContainer, colors, RefreshIconStyle } from '../Styles/Styles'
import MenuComponents from './MenuComponents'
import { ReactComponent as MainLogo } from '../Icons/main-logo-icon.svg'

const Courierpackages = () => {
  const [isPackages, setIsPackages] = useState(false)
  return (
    <>
      <MenuComponents></MenuComponents>
      {/* List of packages nearby */}
      <FlexContainer orientation='v' height='100%'>
        {isPackages === true ? (
          <>
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
          </>
        ) : (
          <>
            <MainLogo className='icon'></MainLogo>
            <div
              style={{
                color: colors.darkBlue,
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.25)',
                textAlign: 'center',
              }}>
              There is nothing to deliver.
              <br />
              Come back later.
            </div>
            <RefreshIconStyle></RefreshIconStyle>
          </>
        )}
      </FlexContainer>
    </>
  )
}

export default Courierpackages
