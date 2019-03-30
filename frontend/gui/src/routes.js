import React from 'react'

import {Route } from 'react-router-dom'

import FacilityList from './containers/FacilityListView'
import FacilityDetail from './containers/FacilityDetailView'

const BaseRouter = () => (

    <div>
        <Route exact path='/' component={FacilityList} />
        <Route exact path='/:facilityID' component={FacilityDetail} />
    </div>
)


export default BaseRouter