import React, { Component } from 'react'
import moment from 'moment'

export default class Korona extends Component {
    render() {
        return (
            <div style={scoretable}>
            
                
                    <p>id: {this.props.tauti}</p>
                    <p>päivä: {moment(this.props.paiva).format('DD/MM/YYYY')}</p>
                    <p>Healthcare district: {this.props.healthCareDistrict}</p>
                    <p>Infection source country: {this.props.infectionSourceCountry}</p>
                    <p>Infection source: {this.props.infectionSource}</p>
                
            
        </div>
        )
    }
}

const scoretable = {
    border: "4px solid black",
    borderRadius: "3%",
    background:"ghostwhite",
    padding: "3px",
    fontWeight: "bold",
    color: "#f83d56"

}