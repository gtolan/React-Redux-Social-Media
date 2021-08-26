import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Cookies from './components/Cookies';
import News from './components/News';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store.js';
// import mockSocialMediaData from './mock/social-media-api'

function App() {

  return (
    <Provider store={store}>
       <Router>
      <div className="App">
      {/* <Route path='/' exact render={HomePage} /> */}
      <Route path="/" exact >
        <HomePage />
      </Route>
      <Route path='/news' component={News} />
{/*         
        <Navbar />
        <header className="App-header">
          <PostsForm />
          <hr/>
          <Posts />
        </header> */}
        <Cookies />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
