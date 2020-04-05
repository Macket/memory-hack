import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Compare from '../Compare';
import './styles.css'

export default class App extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/' component={ Home } />
               <Route exact path='/compare/' component={ Compare } />
               {/*<Route*/}
                   {/*exact*/}
                   {/*path='/chat/:chatId/'*/}
                   {/*render={ obj => <Layout*/}
                       {/*chatId={ Number(obj.match.params.chatId) }*/}
                   {/*/>*/}
                   {/*}*/}
               {/*/>*/}
           </Switch>
       )
   }
}
