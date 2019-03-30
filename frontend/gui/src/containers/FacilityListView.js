import React, { Component } from 'react'

import axios from 'axios'

import Facilities from '../components/Facilities'




class FacilityList extends Component {

    state = {
        facilities: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    facilities: res.data,
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <Facilities data={this.state.facilities} />
        )
    }
}

export default FacilityList