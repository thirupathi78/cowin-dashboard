import CowinDashboard from './components/CowinDashboard'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <p className="description">Co-WIN</p>
    </div>
    <h1 className="heading">CoWIN Vaccination in India</h1>
    <CowinDashboard />
  </div>
)

export default App
