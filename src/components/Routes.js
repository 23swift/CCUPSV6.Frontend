import React, { useState } from 'react'
import { Route, BrowserRouter as Router ,Switch,useLocation} from "react-router-dom";
import ReactDOM from "react-dom";
import SimpleTable from '../pages/Table';
import Main1 from '../pages/Main1';
import Transactions from '../pages/Transactions';
import AddEmployee from '../pages/AddEmployee';
import ApplicationDataEntry from '../pages/Transactions/Application/ApplicationDataEntry';
import NotFoundPage from '../pages/NotFoundPage';
import ApplicationForm from '../pages/Transactions/Application/ApplicationForm';
import NavBar from './NavBar';
import MobileMenu from '../pages/MobileMenu';

import InstitutionReference from '../pages/Utilities/InstitutionProductReference/InstitutionReference';
import InstitutionEnrollment from '../pages/Transactions/Institution/InstitutionEnrollment';
import AuthenticatedRoute from './AuthenticatedRoute';
import Login from '../pages/Login';
function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
   return location;
  }, [location]);
}

const Routes = () => {
  const [currentLoc, setCurrentLoc] = useState("");
  // checkLocation(setCurrentLoc);
  // console.log(currentLoc);
  let location = useLocation();
  React.useEffect(() => {
   
    setCurrentLoc(location);
 
  }, [location]);
  
    return (
      <div>
         <NavBar 
          currentLocation={currentLoc}
         />
        <Switch>
          <Route exact path="/" component={Main1} />
          <Route exact path="/login" component={Login} />
          
          <AuthenticatedRoute exact path="/transactions" component={Transactions} />
          <AuthenticatedRoute exact path="/applicationDataEntry" component={ApplicationDataEntry}/>
          <AuthenticatedRoute exact path="/applicationForm" component={ApplicationForm}/>
          <AuthenticatedRoute exact path="/addEmployee" component={AddEmployee} />
          <AuthenticatedRoute exact path="/view" component={SimpleTable} />
          <AuthenticatedRoute exact path="/mobileMenu" component={MobileMenu} />
          <AuthenticatedRoute exact path="/instProdRef" component={InstitutionReference} />
          
          <AuthenticatedRoute path="/institutionEnrollment" component={InstitutionEnrollment} />
          
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
}

export default Routes
