// import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
//  import Greet from './components/Greet';
//  import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Rule from './components/State';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Event from './components/Event';
// import StyleSheet from './components/StyleSheet';
// import Form from './components/Form';
// import FragmentsDemo from './components/FragmentsDemo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

function App() {
  return (
    <div className="App">
      { /* <Greet name='sandeep' heroName='super' />
      <Greet name='rohit' heroName='batman' />
      <Greet name='chethan' heroName='super' />*/
      // <Welcome name='chethan' heroName='dhanni' />
      /*<Hello />
      <Rule /> */}
      {/* <Message />
      <FunctionClick />
      <Counter />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Event />
      <StyleSheet previous={false} /> */}
      {/* <Form /> */}
      {/* <FragmentsDemo /> */}
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User name='sandeep' />
    </div>
  );
}

export default App;
