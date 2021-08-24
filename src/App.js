import { useState } from 'react'
import 'antd/dist/antd.css'
import Navbar from './scenes/Navbar'
import Home from './scenes/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'
import SignUp from './scenes/SignUp'
import SignIn from './scenes/Login'


import { Layout } from 'antd'

const { Header, Content } = Layout

function App() {
  const [user, setUser] = useState()
  return (
    <Router>
      <Layout>
        <div className="App">
          <Header>
            <Navbar />
          </Header>
          <Content>
            <div className="content">
              <Switch>
                <Route exact path="/signin">
                  <SignIn setUser={setUser} />
                </Route>
                <Route exact path="/signup">
                  <SignUp setUser={setUser} />
                </Route>
                <Route exact path="/">
                  {user ? (
                    <Home user={user} />
                  ) : (
                    <SignIn setUser={setUser} />
                  )}
                </Route>
                <Route exact path="/create">
                  <Create />
                </Route>
                <Route exact path="/blogs/:id">
                  <BlogDetails />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Content>
        </div>
      </Layout>
    </Router>
  )
}

export default App
