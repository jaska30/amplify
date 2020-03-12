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
                this.setState({ korona: res.data.confirmed })
            });
    }
    render() {
        var all = this.state.korona
            .map(function (korona) {
                return (<Korona tauti={korona.id} paiva={korona.date} healthCareDistrict={korona.healthCareDistrict} infectionSourceCountry={korona.infectionSourceCountry} infectionSource={korona.infectionSource}/>) //mäpätään tietokannan tulokset ja luodaan lista parhaimmista pelaajista. -jaska
            });
        return (
            <div >
                <p style={divi}>{all}</p>
            </div>
        )
    }
}




const divi = {
    display: "grid",
    gridTemplateColumns:"repeat(5, 2fr)",
    gridGap: "5em",
    padding: "3em",
    opacity: "0.5"
    // border: "2px solid black",
    // borderRadius: "3%",
    // background:"ghostwhite",
    // padding: "3px"
    
}