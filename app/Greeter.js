import config from './config.json';
import React, {Component} from 'react';
import styles from './Greeter.css';

class Greeter extends Component{
  render(){
    return(
      <div className={styles.root}>
        {config.greetText}99999
      </div>
    )
  }
}

export default Greeter;
