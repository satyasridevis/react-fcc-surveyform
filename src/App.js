import Header from './components/Header';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <form className="form-box">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Age(optional)</label>
          <input
            type="number"
            id="number"
            min="10"
            max="99"
            placeholder="Enter your age"
          ></input>
          <label for="role" id="dropdown-label">
            {" "}
            What options best describes your current role{" "}
          </label>
          <select id="dropdown" name="role">
            <option value="student">Student</option>
            <option value="full time job"> Full Time Job</option>
            <option value="full time learner"> Full Time Learner</option>
            <option value="other"> Other </option>
          </select>

          <label>Enter your name:</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default App;
