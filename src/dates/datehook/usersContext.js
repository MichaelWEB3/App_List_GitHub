import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const UserContext = createContext({})
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserProvider(props) {

    const baseUrl = 'https://api.github.com/users/MichaelWEB3/repos'
    const [datadb, setDate] = useState([])
    const [dbSaving, setDbSaving] = useState(null)
    const [valuInput, setValuInput] = useState('')
    const [valuInputSave, setValuInputSave] = useState('')

    //fazendo req ao iniciar app
    useEffect(() => {
        if (valuInput === '') {
            async function getInfoGit() {
                const req = await axios.get(`${baseUrl}`)
                setDate(req.data)
            }
            getInfoGit()
        }

    }, [valuInput, valuInputSave])

    async function getDbSaving() {

        if (valuInputSave === '') {
            let keys = []
            await AsyncStorage.getItem('keys')
                .then(req => JSON.parse(req))
                .then(json => {
                    keys = json
                })
                .catch(error => console.log('error!'));

            //console.log(keys)

            let r3 = datadb?.filter(a => keys.includes(a.id));
            r3?.map((item) => (item.id))
            setDbSaving(r3)
        }

    }

    //filtro de pesquisa da home
    async function SetValuInput(value) {
        if (value) {
            var fill = datadb?.filter((a) => {
                if (a.name === value) return a
            })
            setDate(fill)
        } else {
            const req = await axios.get(`${baseUrl}`)
            setDate(req.data)
        }

    }

    //filtro de pesquisa da pag save
    async function SetValuInputSave(value) {
        if (value) {
            var fill = dbSaving?.filter((a) => {
                if (a.name == value) return a
            })
            setDbSaving(fill)
        } else {
            getDbSaving()
        }

    }
    return (
        <UserContext.Provider value={{
            datadb,
            setDate,
            getDbSaving,
            dbSaving,
            valuInput,
            setValuInput,
            SetValuInput,
            SetValuInputSave,
            setValuInputSave,
            valuInputSave
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext