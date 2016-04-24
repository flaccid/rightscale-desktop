import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import LoginModal from './LoginModal'
import NavDock from './NavDock'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div>
            <LoginModal />
            <NavDock />
          </div>
        </div>
      </div>
    );
  }
}
