import React, { Component } from 'react'

import axios from 'axios'

class FacilityDetail extends Component {

    state = {
        facility: {}
    }

    componentDidMount() {
        const facilityID = this.props.match.params.facilityID
        axios.get(`http://127.0.0.1:8000/api/${facilityID}`)
            .then(res => {
                this.setState({
                    facility: res.data,
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.facility.name}<br />
                {this.state.facility.number}
            </div>
        )
    }
}

export default FacilityDetail