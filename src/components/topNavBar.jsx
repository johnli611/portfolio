import React, { Component }       from 'react';
import '../stylesheets/components/top-nav-bar.scss';


const navItems = ['About', 'Photography', 'Portfolio', 'Bucket List'];

export default class TopNavBar extends Component {

  render () {
    return (
      <div className="top-nav-bar">
        <ul className="top-nav-menu">
          {this.renderNavItems()}
        </ul>
      </div>
    );
  }

  renderNavItems() {
    return navItems.map((navItem) => {
      return (
        <li className="top-nav-menu-item">
          <h5 className="top-nav-menu-item-title">
            {navItem}
          </h5>
        </li>
      );
    });
  }
}
