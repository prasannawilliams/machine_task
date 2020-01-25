import React, {
  Component
} from 'react';
import RoutingComponent from '../utils/RouterComponent';
import './App.css';

export default class App extends Component {
  render() {
      return ( 
        <div className="main-container">
            <div className = "routing-class"> 
              <RoutingComponent />
            </div>  
        </div>
      );
  }
}