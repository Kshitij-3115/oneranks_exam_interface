import React from 'react';
import { Route, Switch } from 'react-router-dom'; // react router
import { Fragment } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBook, faFile, faPenSquare, faChartBar, faCamera, faPen, faUpload, faCloudUploadAlt, faPlus, faArrows, faPlay, faBullseye } from '@fortawesome/free-solid-svg-icons'



import AuthPage from './components/AuthComponents/AuthPage';
import Simulator from './components/ExamManager/ExamSimulator/Simulator';
import ExamManager from './components/ExamManager/ExamManager';
import ContestPage from './components/ExamManager/ContestPage';

library.add(fab, faUser, faBook, faFile, faPenSquare, faChartBar, faCamera, faPen, faUpload, faCloudUploadAlt, faPlus, faPlay, faBullseye);

function App() {


  return (
    <Fragment>
      {/* <AuthPage/>  */}
      <Switch>
        <Route path="/signup" exact>
          <AuthPage />
        </Route>
        <Route path="/" exact>
          <Simulator />
        </Route>
        <Route path="/exam">
          <ExamManager />
        </Route>
        <Route path="/contests/:value">
          <ContestPage /> 
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
