import React from 'react';
import { Link } from 'react-router-dom';
class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Login功能
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  注册
                </Link>
              </li>
            </ul> */}

            <Link className="navbar-brand" to="/signup">
          注册
        </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
