import {
  decorate,
  observable,
  action,
  computed,
  runInAction,
  autorun
  // toJS
} from "mobx";

import axios from "axios";

// import history from "./history";
// import LoginStore from "./Components/Login/store";
// import SupplierStore from "./Components/Suppliers/store";
// import ControlCategoriesStore from "./Components/ControlCategories/store";
// import ControlsStore from "./Components/Controls/store";

class Store {
  constructor() {
    // this.LoginStore = new LoginStore(this);
    // this.SuppliersStore = new SupplierStore(this);
    // this.ControlCategoriesStore = new ControlCategoriesStore(this);
    // this.ControlsStore = new ControlsStore(this);
  }

  // logout() {
  //   runInAction("Set logout properties", () => {
  //     this.token = null;
  //     this.username = null;
  //     history.push("/login");
  //   });
  // }
}

decorate(Store, {
  // token: observable,
  // logout: action,
  // averageRTT: computed,
});

export default new Store();
