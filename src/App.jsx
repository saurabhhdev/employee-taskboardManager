import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser && loggedInUser !== '') {
      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '')
    setLoggedInUserData(null)
    setUser(null)
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password)

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid Credentials')
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App