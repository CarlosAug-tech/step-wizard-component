import React from 'react';
import { FaAddressBook, FaHome, FaHotel, FaLock, FaUser } from 'react-icons/fa';

import StepWizard, { IStepObjectProps } from './components/StepWizard';

import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignUp';
import About from './pages/About';

import GlobalStyles from './assets/Styles/global';

const steps: IStepObjectProps[] = [
  {
    Icon: FaHome,
    Component: Home,
  },
  {
    Icon: FaUser,
    Component: SignIn,
  },
  {
    Icon: FaAddressBook,
    Component: About,
  },
];

const App: React.FC = () => (
  <div className="App">
    <StepWizard steps={steps} />
    <GlobalStyles />
  </div>
);

export default App;
