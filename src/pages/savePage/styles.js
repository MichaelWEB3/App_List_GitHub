import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;

`
export const BoxItems = styled.ScrollView`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin:10px ;
  `
export const AreaDestaque = styled.View`
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    flex-direction: row;
    padding: 10px;
    margin-top: 45px;
`

export const TextTitle = styled.Text`
    font-weight: 500;
    font-size: 22px;

`

export const Subtitle = styled.Text`
   color: #636363;
   font-weight: 400;
   font-size: 16px;
`


export const ButtonSave = styled.TouchableOpacity`
   position: relative;
   width: 195px;
   height: 52px;
   background-color: #2196f3;
   bottom: 50px;
   left: 190px;
   border-radius: 39px;
   justify-content: center;
   align-items: center;
   flex-direction: row;
`

export const ButtonSaveText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
`
export const Destaque = styled.Image`
`

export const ITemsArea = styled.View`
    width: 90%;
    height: auto;
    flex-direction:column;
    padding: 10px;
    margin: 20px;
    height: auto;
    background-color: #FFF;
    border-radius: 14px;
    shadow-color: #000;
    shadow-opacity: 1;
    shadow-radius: 20px;
    elevation: 10;

`
export const ItemInfo = styled.View`
    flex-direction:row;
    width: 100%;
`
export const ItemICon = styled.Image`
    width: 50px;
    height: 50px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
export const AreaText = styled.View`
    width: 80%;
    margin: 5px;
`
export const ItemTitle = styled.Text`
   font-weight: 400;
   font-size: 16px;
   font-weight: 500;
   font-style: normal;
   color: #2196f3;
`
export const ITemSubTItle = styled.Text`
   color: #636363;
   font-weight: 400;
   font-size: 14px;

`


export const ButtonSaveArea = styled.View`
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 5px;

`

export const ITemButtonSave = styled.TouchableOpacity`
   border-radius: 16px;
   background-color: #2196f3;
   width: 124px;
   height: 38px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`
export const ITemButtonSaveText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`

export const ITemTextLink = styled.TouchableOpacity`
 width: auto;
 height: auto;

`