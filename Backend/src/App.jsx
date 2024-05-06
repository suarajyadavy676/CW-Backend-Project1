import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <h1 className="text-center text-2xl mt-5">Kanban App</h1>
      <div className="text-center mt-5">
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
