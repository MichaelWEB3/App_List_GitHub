import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Linking } from 'react-native';
import useDados from '../../dates/datehook/userHook'
import SearchInput from '../../components/searchInput'
import Destaque from '../../Assets/destaque.svg'
import EmojiTriste from '../../Assets/emoji_triste.svg'
import Search from '../../Assets/search.svg'
import SalvoAzul from '../../Assets/salvo_azul.svg'
import Setadireitabranco from '../../Assets/seta_direita_branco.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const date = useDados()
    const [search, setSearch] = useState('')
    const [msg, setMsg] = useState(true)
    //const [keys, setkeys] = useState([])

    function handlerSave() {
        navigation.navigate('SavePage')
    }

    //saving async storage itens salvos pelo usuario
    async function handlerSaveDB(key) {
        let keys = []
        await AsyncStorage.getItem('keys')
            .then(req => JSON.parse(req))
            .then(json => {
                keys = json
            })
            .catch(error => console.log('error!'));
        var maisArry = await [...keys, key]
        await AsyncStorage.setItem('keys', JSON.stringify([...keys, key]))
            .then(json => alert('success!'))
            .catch(error => alert('error!'));
    }
    useEffect(() => {
        if (date?.datadb.length != 0) {
            setMsg(true)
        } else {
            setMsg(false)
        }
    }, [date?.datadb])

    return (
        <S.Container>
            <S.BoxItems>
                <SearchInput onSubmitEditing={() => date?.SetValuInput(search)} onSelectionChange={() => date?.setValuInput(search)} IconSvg={Search} pleaceholder='Procurar organizações...' setSearch={setSearch} value={search} onChangeText={text => setSearch(text)} />
                {msg &&
                    <S.AreaDestaque>
                        <Destaque style={{ width: 26, height: 26 }} />
                        <S.TextTitle>Organizações em destaque</S.TextTitle>
                        <S.Subtitle>Veja as organizações em tendência no GitHub.</S.Subtitle>
                    </S.AreaDestaque>
                }
                {!msg &&
                    <S.AreaDestaque>
                        <EmojiTriste style={{ width: 26, height: 26 }} />
                        <S.Subtitle>Oops! Não encontramos organizações
                            com este nome.</S.Subtitle>
                    </S.AreaDestaque>
                }

                {date?.datadb?.map((item, key) => {
                    return (
                        <S.ITemsArea key={key}>
                            <S.ItemInfo>
                                <S.ItemICon source={{ uri: item.owner.avatar_url }} resizingMode='center' />
                                <S.AreaText>
                                    <S.ITemTextLink onPress={() => Linking.openURL(item.html_url)}>
                                        <S.ItemTitle>{item.name}</S.ItemTitle>
                                    </S.ITemTextLink>
                                    <S.ITemSubTItle>{item.description}</S.ITemSubTItle>
                                </S.AreaText>
                            </S.ItemInfo>
                            <S.ButtonSaveArea>
                                <S.ITemButtonSave onPress={() => handlerSaveDB(item.id)}>
                                    <SalvoAzul style={{ width: 20, height: 20 }} />
                                    <S.ITemButtonSaveText>Salvo</S.ITemButtonSaveText>
                                </S.ITemButtonSave>
                            </S.ButtonSaveArea>
                        </S.ITemsArea>
                    )
                })}

            </S.BoxItems>
            <S.ButtonSave onPress={() => handlerSave()}>
                <S.ButtonSaveText>
                    Ver salvos
                </S.ButtonSaveText>
                <Setadireitabranco style={{ width: 20, height: 20 }} />
            </S.ButtonSave>
        </S.Container>
    )
}