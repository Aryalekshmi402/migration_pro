import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import routes from "./routes";
import withTracker from "./withTracker";
import AddCustomer from './components/AddUser/addUser'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                  <Header />
                  <main className='py-3'>
                 <Container>
                   <Route path='/' component={HomeScreen} exact />
                   <AddCustomer/>
                 </Container>
                </main>
                <Footer />
                </route.layout>
                
                
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
