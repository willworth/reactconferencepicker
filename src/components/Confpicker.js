import React, { Component } from 'react';
import Allconfs from './Allconfs';
import Shortlist from './Shortlist';

export default class Confpicker extends Component {
    render() {
        return (
            <div>
                <h2>Confpicker</h2>
                <Allconfs/>
                <Shortlist/>
            </div>
        )
    }
}
