import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BrowseJobs from './pages/BrowseJobs'
import EmployeeProfile from './pages/EmployeeProfile'
import EmployerProfile from './pages/EmployerProfile'
import Messages from './pages/Messages'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<BrowseJobs />} />
        <Route path="/employee" element={<EmployeeProfile />} />
        <Route path="/employer" element={<EmployerProfile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
