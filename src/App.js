import "./App.css";
import UserProfile from "./components/userProfile/UserProfile";
import UserProfileClass from "./components/userProfile/UserProfileClass";
import ClassComponent from "./components/classComponent/ClassComponent";

function App() {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  return (
    <div className="App">
      <ClassComponent />
      {/* <UserProfile firstname={user.firstname} lastname={user.lastname} /> */}
      <UserProfileClass firstname={user.firstname} lastname={user.lastname} />
    </div>
  );
}

export default App;
