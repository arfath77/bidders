//these routes will only be for distributors

import React from 'react';
import { Route } from 'react-router-dom';

import MyBids from '../components/distributor/MyBids';



export default () => (
    <>
        <Route path="/distributor/myBids" component={MyBids} />
    </>
);