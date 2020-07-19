import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routerList from "./router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./assets/scss/global.scss";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

// const loading = () => <div>loading...</div>;
const App = () => {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <div className="container-md px-0 px-md-3">
          <Header />
          <ToastContainer />
          <Switch>
            {routerList.map((item, key) => {
              return (
                <Route
                  path={item.path}
                  key={key}
                  component={
                    // <Suspense fallback={loading()}>
                    //   <item.component />
                    // </Suspense>
                    item.component
                  }
                  exact={item.exact}
                />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
