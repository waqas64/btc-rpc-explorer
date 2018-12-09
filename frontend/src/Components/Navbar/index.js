import React, { Component } from "react";

import config from "../../app/config";
import coins from "../../app/coins.js";

const coinConfig = coins[config.coin];
const logo = require("../../static/logo/bsv.png");

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span>
              <img src={logo} className="header-image" alt="logo" />
              <span>{coinConfig.siteTitle} </span>
            </span>
          </a>
        </div>
        <button
          type="button"
          className="navbar-toggler navbar-toggler-right"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-label="collapse navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/about" className="nav-link">
                <span>About</span>
              </a>
            </li>
            {config.siteTools ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Tools</span>
                </a>
                <div className="dropdown-menu" aria-label="Tools Items">
                  {config.siteTools.map(item => (
                    <a key={item.name} className="dropdown-item" href={item.url}>
                      <i className={item.fontawesome} />
                      <span> {item.name}</span>
                    </a>
                  ))}
                </div>
              </li>
            ) : null}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="javascript:void 0"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-cog" />
                <span>Settings</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {coinConfig.currencyUnits ? (
                  <div>
                    <span class="dropdown-header">Currency Units</span>
                    {coinConfig.currencyUnits.map(item => (
                      <a
                        className="dropdown-item"
                        href={`/changeSetting?name=currencyFormatType&value=${item.values[0]}`}
                      >
                        <div>
                          <span>{item.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : null}
                <span className="dropdown-header">Theme</span>
                <a className="dropdown-item" href="/changeSetting?name=uiTheme&value=light">
                  <span>Light</span>
                </a>
                <a className="dropdown-item" href="/changeSetting?name=uiTheme&value=dark">
                  <span>Dark</span>
                </a>
              </div>
            </li>
          </ul>
          <form method="post" action="/search" className="form-inline">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control form-control-sm"
                name="query"
                placeholder="block height/hash, txid, address"
                style={{ width: 300 }}
              >
                {/* <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search" />
                  </button>
                </div> */}
              </input>
            </div>
          </form>
        </div>
      </nav>

      // 			form(method="post", action="/search", className="form-inline")
      // 				div(className="input-group input-group-sm")
      // 					input(type="text", className="form-control form-control-sm", name="query", placeholder="block height/hash, txid, address", value=(query), style="width: 300px;")
      // 					div(className="input-group-append")
      // 						button(type="submit", className="btn btn-primary")
      // 							i(className="fas fa-search")
    );
  }
}

export default Navbar;
