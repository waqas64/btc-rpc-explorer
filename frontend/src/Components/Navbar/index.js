import React, { Component } from "react";

import config from "../../app/config";
import coins from "../../app/coins.js";

const coin = config.coin;
const coinConfig = coins[config.coin];
const logo = require(`../../static/logo/${coin.toLowerCase()}.png`);

class Navbar extends Component {
  render() {
    console.log(coinConfig);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/" />
          <span>
            {coinConfig.logoUrl ? <img src={logo} className="header-image" alt="logo" /> : null}
            <span>{coinConfig.siteTitle} </span>
          </span>
        </div>
      </nav>

      // nav(class="navbar navbar-expand-lg navbar-dark bg-dark mb-4")
      // div(class="container")
      // 	a(class="navbar-brand", href="/")
      // 		span
      // 			if (coinConfig.logoUrl)
      // 				img(src=coinConfig.logoUrl, class="header-image", alt="logo")
      // 			span #{coinConfig.siteTitle}

      // 	button(type="button", class="navbar-toggler navbar-toggler-right", data-toggle="collapse", data-target="#navbarNav", aria-label="collapse navigation")
      // 		span(class="navbar-toggler-icon")

      // 	div(class="collapse navbar-collapse", id="navbarNav")
      // 		if (client)
      // 			ul(class="navbar-nav mr-auto")
      // 				li(class="nav-item")
      // 					a(href="/about", class="nav-link")
      // 						span About

      // 				if (config.siteTools)
      // 					li(class="nav-item dropdown")
      // 						a(class="nav-link dropdown-toggle", href="javascript:void(0)", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
      // 							span  Tools
      // 						div(class="dropdown-menu", aria-label="Tools Items")
      // 							each item in config.siteTools
      // 								a(class="dropdown-item", href=item.url)
      // 									i(class=item.fontawesome, style="width: 20px; margin-right: 10px;")
      // 									span  #{item.name}

      // 				if (config.headerDropdownLinks)
      // 					li(class="nav-item dropdown")
      // 						a(class="nav-link dropdown-toggle", href="javascript:void(0)", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
      // 							span  #{config.headerDropdownLinks.title}
      // 						div(class="dropdown-menu", aria-label=(config.headerDropdownLinks.title + " Items"))
      // 							each item in config.headerDropdownLinks.links
      // 								a(class="dropdown-item", href=item.url)
      // 									img(src=item.imgUrl, style="width: 24px; height: 24px; margin-right: 8px;", alt=item.name)
      // 									span  #{item.name}

      // 				li(class="nav-item dropdown")
      // 					a(class="nav-link dropdown-toggle", href="javascript:void(0)", id="navbarDropdown", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
      // 						i(class="fas fa-cog")
      // 						span  Settings
      // 					div(class="dropdown-menu", aria-labelledby="navbarDropdown")
      // 						if (coinConfig.currencyUnits)
      // 							span(class="dropdown-header") Currency Units
      // 							each item in coinConfig.currencyUnits
      // 								a(class="dropdown-item", href=("/changeSetting?name=currencyFormatType&value=" + item.values[0]))
      // 									each valueName in item.values
      // 										if (currencyFormatType == valueName)
      // 											i(class="fas fa-check")
      // 									span  #{item.name}

      // 						span(class="dropdown-header") Theme
      // 						a(class="dropdown-item", href="/changeSetting?name=uiTheme&value=light")
      // 							if (session.uiTheme == "light" || session.uiTheme == "")
      // 								i(class="fas fa-check")
      // 							span  Light
      // 						a(class="dropdown-item", href="/changeSetting?name=uiTheme&value=dark")
      // 							if (session.uiTheme == "dark")
      // 								i(class="fas fa-check")
      // 							span  Dark

      // 			form(method="post", action="/search", class="form-inline")
      // 				div(class="input-group input-group-sm")
      // 					input(type="text", class="form-control form-control-sm", name="query", placeholder="block height/hash, txid, address", value=(query), style="width: 300px;")
      // 					div(class="input-group-append")
      // 						button(type="submit", class="btn btn-primary")
      // 							i(class="fas fa-search")
    );
  }
}

export default Navbar;
