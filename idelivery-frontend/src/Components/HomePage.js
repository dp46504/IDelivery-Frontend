import React from 'react'
import {BodyContainer,FlexContainer, Title, GearIconStyle, colors} from '../Styles/Styles'
import {ReactComponent as GearIcon} from '../Icons/gear-icon.svg'
import ListItemComponent from '../Components/ListItemComponent'

function HomePage(props){
return(
    <BodyContainer>
        <GearIcon fill={colors.darkBlue} style={GearIconStyle}/>
        <Title>Hello, Kacper!</Title>

    <FlexContainer orientation="v" height="100%">
        <Title fontSize="2.05rem" color={colors.lightYellow}>Active errand</Title>
        <ListItemComponent></ListItemComponent>

    </FlexContainer>
    </BodyContainer>
)

}

export default HomePage
