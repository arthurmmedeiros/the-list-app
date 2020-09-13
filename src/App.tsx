import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faRecordVinyl, faArrowRight, faBars, faList, faEdit, 
  faHome, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Home from './Pages/Home';

library.add(faRecordVinyl, faArrowRight, faBars, faList, faEdit, faHome, faCheckCircle);

const App = () => {
  const StoreProvider = lazy(() => import('./Stores/StoreProvider'));
  
  //const Home = lazy(() => import('./Pages/Home'));
  const Albums = lazy(() => import('./Pages/Albums'));
  const Posts = lazy(() => import('./Pages/Posts'));
  const Todos = lazy(() => import('./Pages/Todos'));
  const NotFound = lazy(() => import('./Pages/NotFound'));
  const Menu = lazy(() => import('./Components/BurgerMenu'));


  return(
    <Suspense fallback={<div>Loading...</div>}>
      <StoreProvider>
      <Menu/>  
        <Switch>
                  
          <Route exact path='/'><Home/></Route>
          <Route exact path='/albums'><Albums/></Route>
          <Route exact path='/posts'><Posts/></Route>
          <Route exact path='/todos'><Todos/></Route>
          <Route exact path='*'><NotFound/></Route>          
        </Switch>
      </StoreProvider>
    </Suspense>
  )
}

export default App;
