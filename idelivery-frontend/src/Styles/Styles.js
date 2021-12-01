import styled, {createGlobalStyle} from 'styled-components';

export const colors={
    "darkBlue":"#31A2C6",
    "lightYellow":"#FFD56A",
    "darkYellow":"#DEAE33",
}

const globalPadding="1rem";

export const GlobalStyles=createGlobalStyle`
*{
    box-sizing: border-box;
}
html,body{
    width:100%;
    height:100%;
    
    font-family: 'Montserrat', sans-serif;
    
    margin:0;
}

body{
    padding-top: ${globalPadding};
}
`

export const FlexContainer=styled.div`
width:80%;
max-width: 800px;
height:${props=>{
    return props.height;
}};

display: flex;
flex-direction: ${props=>{
    return props.orientation==="h"?"row":"column";
}};
justify-content: center;
align-items: center;

margin: 0 auto;
`
export const BodyContainer=styled.div`
width:80%;
max-width: 800px;
height:calc(100vh - globalPadding);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 0 auto;
`
export const Title=styled.div`
font-weight: bold;
font-size:${props=>{
    return props.fontSize?props.fontSize:"1.5rem";
}};
color:${props=>{
    return props.color?props.color:colors.darkBlue;
}};
text-shadow:0.5rem 0.5rem 1rem rgba(0,0,0,0.25);
`

export const GearIconStyle={
"width":"2rem",
"height":"2rem",

"position": "absolute",
"top":globalPadding,
"right":globalPadding,
}

export const ListItem=styled.div`

`