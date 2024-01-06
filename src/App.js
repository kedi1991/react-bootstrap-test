import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyForm from "./components/MyForm";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <MyNavBar></MyNavBar>
        <MyForm></MyForm>
        <UserList></UserList>
    </>
  );
}

export default App;
