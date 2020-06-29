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
          
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/applicationDataEntry" component={ApplicationDataEntry}/>
          <Route exact path="/applicationForm" component={ApplicationForm}/>
          <Route exact path="/addEmployee" component={AddEmployee} />
          <Route exact path="/view" component={SimpleTable} />
          <Route exact path="/mobileMenu" component={MobileMenu} />
          <Route exact path="/instProdRef" component={InstitutionReference} />
          
          <Route path="/institutionEnrollment" component={InstitutionEnrollment} />
          
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
}

export default Routes
