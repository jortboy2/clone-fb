import axios from "axios";
import { Fragment, useEffect } from "react";
import './tailwind/output.css'
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import routers from "./router";
import DefaultLayout from "./components/Layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;
          const Layout = route.Layout ? DefaultLayout : Fragment
         
          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              key={index}
            />
          );
        })}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
