import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-slate-900 w-full h-full">
      <div className="px-96 py-20 ">
        <div className="bg-white rounded-lg px-10">
          <h1 className="text-center font-semibold text-3xl py-5">Log in</h1>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <input type="text" name="user" placeholder="Enter your name" className="flex-1 w-full border border-blue-400 focus:border-red-500 p-4 rounded-md" />
            <input type="password" name="password" placeholder="Enter your password"  className="flex-1 w-full border border-blue-400 focus:border-red-500 p-4 rounded-md"/>
            <button type="submit" className="bg-cyan-400 flex-1 w-full text-white rounded-md py-4">Log in</button>
            <a target="_blank" href="#" className="text-center pb-5">
              or, sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
