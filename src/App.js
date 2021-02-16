import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import OuterLayoutComponent from './components/common/outer.component';
import InnerLayoutComponent from './components/common/inner.component';
import Login from './components/login/login.component';
import Registration from './components/registration/registration.component';
import Add from './components/add/add.component';
import Update from './components/update/update.component';
import List from './components/list/list.component';

function App() {
  return (
    <Provider store={store}>
    <Router>
        <div>
          <h1>Welcome</h1>
          <Switch>
            <Route exact path="/" component={OuterLayoutComponent}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/add" component={Add}/>
            <Route path="/update/:id" component={Update}/>
            <Route path="/list" component={List}/>
            <Route path="/dashboard" component={InnerLayoutComponent}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
