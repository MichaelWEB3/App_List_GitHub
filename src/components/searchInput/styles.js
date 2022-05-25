import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
 width: 100%;
 height: 60px;
 background-color: #FFF;
 flex-direction: row;
 border-radius: 14px;
 align-items: center;
 margin-bottom: 15px;
 shadow-color: #000;
 shadow-opacity: 1;
 shadow-radius: 25px;
 elevation: 4;
 padding-right:15px;
 padding-left: 15px;
 margin-top: 45px;
`
export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #636363;
    margin: 5px;
`

export const ItemIcon = styled.Text`
    color: black;
    opacity: 0.5;
`

export const ButtonArrow = styled.TouchableOpacity`
`