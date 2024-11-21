import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
import UseContext from './components/UseContext';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HooksCounterTwo/>
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <HookCounterOne />
      {/* <ClassMouse /> */}
      <UseContext />
    </div>
  );
}

export default App;
