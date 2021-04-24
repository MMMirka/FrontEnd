import './App.css';
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist';

import { green, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function App() {

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  




  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" >
            Personal trainer
          </Typography> 
          &nbsp;&nbsp;&nbsp;
          <ColorButton variant="contained" color="primary" href="/customers">Customers </ColorButton>
          &nbsp;&nbsp;&nbsp;
          <ColorButton variant="contained" color="primary" href="/training">Training</ColorButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
          <div>
            <Switch>
              <Route exath path ='/customers' component={Customerlist} />
              <Route  path ='/training' component={Traininglist} />
            </Switch>
          </div>
          
          </BrowserRouter>

    </div>
  );
}

export default App;
