import React, { Component } from 'react'

export default class Korona extends Component {
    render() {
        return (
            <div className="scoretable">
            <table className="username" align="center">
                <tr>
                    <td>{this.props.tauti.tauti}</td>
                    <td>{this.props.tauti.maa}
                    </td>
                </tr>
            </table>
        </div>
        )
    }
}