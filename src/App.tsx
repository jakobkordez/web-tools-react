import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import CustomRedirect from './components/CustomRedirect'
import { RootState } from './store'

import './App.css'

const selectisLoggedIn = (state: RootState) => state.user != null;

const App: FunctionComponent = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        {
          isLoggedIn
            ? (
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route>
                  <CustomRedirect />
                </Route>
              </Switch>
            )
            : (
              <Switch>
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route>
                  <CustomRedirect fallback="/login" />
                </Route>
              </Switch>
            )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
