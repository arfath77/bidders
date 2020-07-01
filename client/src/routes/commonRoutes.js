//these routes will be for all users whether looeg in or not
import React from 'react';
import { Route } from 'react-router-dom';

import Signin from '../components/authentication/Signin';
import Signup from '../components/authentication/Signup';
import ListRequirement from '../components/requirements/ListRequirement';
import Homepage from '../components/common/Homepage';
import ShowElement from '../components/template/ShowElement';



export default () => (
    <>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/requirement/list" component={ListRequirement} />
        <Route path="/requirement/:id" component={ShowElement} />
    </>
);