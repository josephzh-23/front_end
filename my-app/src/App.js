import logo from './logo.svg';
import './App.css';
import { UseCallbackEx } from './React_basics/useCallback';
import ClosureExample2 from './React_basics/closure_with_react';
import CleanUp from './React_basics/react_clean_up';
import { Posts } from './React_basics/best_api_practice';
import { SpecificName } from './React_basics/update_specific_property';
import ReactChallenge from './React_challenge';

function App() {
  return (
    <div>
    {/* <CleanUp/>
    <ClosureExample2/> */}

    {/* <SpecificName/> */}
    {/* <Posts/> */}

    <ReactChallenge/>
    </div>
    // <UseCallbackEx/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
