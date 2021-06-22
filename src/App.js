import AddToDo from './AddToDo';
import store from './store'
import './App.css';
import {Provider } from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <AddToDo />
      </Provider>
    </div>
  );
}

export default App;


