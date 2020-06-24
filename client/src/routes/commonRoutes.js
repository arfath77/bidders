//these routes will be for all users whether looeg in or not
import React from 'react';
import { Route } from 'react-router-dom';

import Signin from '../component/authentication/Signin';
import Signup from '../component/authentication/Signup';
import ListRequirement from '../component/requirements/ListRequirement';
import Homepage from '../component/Homepage';



export default () => (
    <>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/requirements" component={ListRequirement} />
    </>
);