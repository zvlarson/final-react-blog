import 'antd/dist/antd.css'
import Navbar from './scenes/Navbar'
import Home from './scenes/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

import { Layout } from 'antd'

const { Header, Content } = Layout;


function App() {
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
            <Route exact path="/">
              <Home />
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
