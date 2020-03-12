import React, { Component } from 'react'
import { getUsers } from '../service'
import Korona from './Korona';

export default class StartPage extends Component {
    state = { korona:[]}
    componentDidMount ()    {
        this.getList()
    }
    getList = () => {
        getUsers()
            .then(res => {
                console.log(res.data)
                this.setState({ korona: res.data })
            });
    }
    render() {
        var all = this.state.korona
            .map(function (korona) {
                return (<Korona tauti={korona} />) //mäpätään tietokannan tulokset ja luodaan lista parhaimmista pelaajista. -jaska
            });
        return (
            <div>
                <p>korona</p>
                <p>{all}</p>
            </div>
        )
    }
}
