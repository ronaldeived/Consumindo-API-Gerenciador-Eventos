import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Casa from './pages/main/casa/index';
import Evento from './pages/eventos/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/casas" component={Casa} />
            <Route path="/eventos" component={Evento} />
        </Switch>
    </BrowserRouter>
);

export default Routes;