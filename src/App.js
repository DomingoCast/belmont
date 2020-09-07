import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import Category from './components/Category/Category'


function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/" component={Main}/>
            <Route path="/category/:id" component={Category}/>
            <Redirect from="/" to="/"/>
        </Switch>
    </Layout>
  );
}

export default App;
