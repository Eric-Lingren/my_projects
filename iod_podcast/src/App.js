import React from 'react';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Resources from './resources/Resources'
import StartProject from './start-project/StartProject'
import CompanyProjects from './company-projects/CompanyProjects'
import Tools from './tools/Tools'
import LoginForm from './login-form/LoginForm'
import Help from './help/Help'
import { Switch, Route } from "react-router-dom";
import { withPdfProvider } from './context/PdfProvider';
import { withAuthProvider } from './context/AuthProvider';

function App(props) {
  return (
    <div className='App'>
      <Navbar /> 
      {!props.isAuthenticated ? <LoginForm /> : null}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/startProject' component={StartProject} />
        <Route path='/companyProjects' component={CompanyProjects} />
        <Route path='/resources' component={Resources} />
        <Route path='/tools' component={Tools} />
        <Route path='/help' component={Help} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withAuthProvider(withPdfProvider(App));
