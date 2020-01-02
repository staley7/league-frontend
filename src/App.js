import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login";
import Standing from "./components/standing/standing";
import Members from "./components/members/members";
import Admin from "./components/admin/admin";
import History from "./components/history/history";
import Events from "./components/events/events";
import AddEvent from "./components/events/add_events/addEvent";
import Home from "./components/home/home";
import AddMember from "./components/members/add_member/addMember";

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/standing" component={Standing}  />
                <Route path="/members/addMembers" component={AddMember} />
                <Route path="/members" component={Members} />
                <Route path="/history" component={History} />
                <Route path="/admin" component={Admin} />
                <Route path="/events/addEvent" component={AddEvent} />
                <Route path="/events" component={Events} />
                <Route path="/" component={Login}  />
            </Switch>
        </Router>
    </div>

  );
}

export default App;
