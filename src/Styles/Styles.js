import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  darkBlue: "#31A2C6",
  lightBlue: "#ADDCEB",
  lightYellow: "#FFD56A",
  darkYellow: "#DEAE33",
};

const globalPadding = "1rem";

export const GlobalStyles = createGlobalStyle`
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
#root{
    width:100%;
    height:100%;
}
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: ${(props) => {
    return props.height;
  }};

  display: flex;
  flex-direction: ${(props) => {
    return props.orientation === "h" ? "row" : "column";
  }};
  justify-content: ${(props) => {
    return props.justifyContent ? props.justifyContent : "center";
  }};
  align-items: ${(props) => {
    return props.alignItems ? props.alignItems : "center";
  }};

  margin: 0 auto;
`;
export const BodyContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: ${(props) => {
    return props.fontSize ? props.fontSize : "1.5rem";
  }};
  color: ${(props) => {
    return props.color ? props.color : colors.darkBlue;
  }};
  text-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
`;

export const GearIconStyle = {
  width: "2rem",
  height: "2rem",

  position: "absolute",
  top: globalPadding,
  right: globalPadding,
};

export const ListItem = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => {
    return props.background ? props.background : colors.lightBlue;
  }};
  font-weight: 500;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.6rem;
`;

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  bottom: 1rem;
  left: 0;
  width: 100%;
  height: 4rem;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.active ? colors.darkBlue : "white";
  }};
  color: ${(props) => {
    return props.active ? "white" : colors.darkBlue;
  }};
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  & .icon {
    fill: ${(props) => {
      return props.active ? "white" : colors.darkBlue;
    }};
  }
`;

export const IconStyle = {
  marginRight: "0.3rem",
  width: "36",
  height: "36",
};
