import React from 'react';
import Header from './Header/Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newTicket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
