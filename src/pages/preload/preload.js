import React, { useEffect } from "react";
import * as S from './styles'
import useDados from '../../dates/datehook/userHook'

export default function Preload({ navigation }) {
    const date = useDados()
    useEffect(() => {
        if (true) setTimeout(() => { navigation.reset({ routes: [{ name: 'Home' }] }) }, 1000)
    })
    return (
        <S.Container>
            <S.Logo style={{ width: 300, height: 200 }} source={require('../../Assets/logotipo.png')} resizingMode='center' />
            <S.LoadingIcon size="large" ></S.LoadingIcon>
        </S.Container>
    )
}