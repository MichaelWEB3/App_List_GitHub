import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Linking } from 'react-native';
import useDados from '../../dates/datehook/userHook'
import SearchInput from '../../components/searchInput'
import Search from '../../Assets/search.svg'
import SalvoBranco from '../../Assets/salvo_branco.svg'
import SetaEsquerda from '../../Assets/seta_esquerda.svg'
import Pesquisa from '../../Assets/pesquisa.svg'
import { useNavigation } from '@react-navigation/native'
import EmojiTriste from '../../Assets/emoji_triste.svg'

export default function SavePage() {

    const date = useDados()
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [msg, setMsg] = useState(true)

    function handlhome() {
        date?.setValuInput('')
        navigation.goBack();
    }

    useEffect(() => {
        date.getDbSaving()
    }, [])
    useEffect(() => {
        if (date?.dbSaving?.length != 0) {
            setMsg(true)
        } else {
            setMsg(false)
        }
        date.getDbSaving()

    }, [date?.dbSaving,search])


    return (
        <S.Container>
            <S.BoxItems>
                <S.AreaDestaque>
                    <SetaEsquerda style={{ width: 26, height: 26 }} onPress={() => handlhome()} />
                    <S.TextTitle>Suas organizações salvas</S.TextTitle>
                    <Pesquisa style={{ width: 26, height: 26 }} />
                </S.AreaDestaque>
                <SearchInput onSubmitEditing={() => date?.SetValuInputSave(search)} onSelectionChange={() => date?.setValuInputSave(search)} IconSvg={Search} pleaceholder='Procurar organizações...' setSearch={setSearch} value={search} onChangeText={text => setSearch(text)} />
                {!msg &&
                    < S.AreaDestaque style={{ flexDirection: 'column' }}>
                        <EmojiTriste style={{ width: 26, height: 26 }} />
                        <S.Subtitle>Oops! Não encontramos organizações
                            com este nome.</S.Subtitle>
                    </S.AreaDestaque>
                }
                {date?.dbSaving?.map((item, key) => {
                    return (
                        <S.ITemsArea key={key}>
                            <S.ItemInfo>
                                <S.ItemICon source={{ uri: item?.owner?.avatar_url }} resizingMode='center' />
                                <S.AreaText>
                                    <S.ITemTextLink onPress={() => Linking.openURL(item?.html_url)}>
                                        <S.ItemTitle>{item?.name}</S.ItemTitle>
                                    </S.ITemTextLink>
                                    <S.ITemSubTItle>{item?.description}</S.ITemSubTItle>
                                </S.AreaText>
                            </S.ItemInfo>

                            <S.ButtonSaveArea>
                                <S.ITemButtonSave onPress={() => handlerSaveDB(item.id)}>
                                    <SalvoBranco style={{ width: 20, height: 20 }} />
                                    <S.ITemButtonSaveText>Salvo</S.ITemButtonSaveText>
                                </S.ITemButtonSave>
                            </S.ButtonSaveArea>
                        </S.ITemsArea>
                    )

                })}
            </S.BoxItems>

        </S.Container >
    )
}