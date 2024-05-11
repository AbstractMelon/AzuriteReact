import logo from './logo.svg';
import './App.css';

function MyButton({text}){
  return (
    <button>{text}</button>
  );
}
function App() {
  return (
    <div>
        <MyButton text="abc" />
    </div>
  );
}

export default App;