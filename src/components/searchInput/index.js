import React, { useState } from 'react'
import * as S from './styles'
import SetaEsquerda from '../../Assets/seta_esquerda.svg'
import useDados from '../../dates/datehook/userHook'

export default function SearchInput({ value, onChangeText, IconSvg, pleaceholder, setSearch, onSubmitEditing, onSelectionChange }) {
    const date = useDados()
    const [changes, setChange] = useState(false)

    return (
        <S.Container>
            {value || changes ? <S.ButtonArrow onPress={() => {
                setSearch('')
                date.setValuInput('')
                date.setValuInputSave('')
            }}><SetaEsquerda style={{ width: 26, height: 26 }} source={require('../../Assets/destaque.svg')} resizingMode='center' /></S.ButtonArrow> : false
            }
            <S.Input
                placeholder={pleaceholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setChange(true)}
                onBlur={() => setChange(false)}
                onSubmitEditing={onSubmitEditing}
                onSelectionChange={onSelectionChange}
                
            />
            <IconSvg fill="rgba(112, 112, 112, 0.5)" />
        </S.Container >
    )
}