import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import Cookies from './components/Cookies';
import NewsFeedPage from './components/Pages/NewsFeedPage';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store.js';
// import mockSocialMediaData from './mock/social-media-api'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path='/' exact component={HomePage} />
          <Route path='/news' component={NewsFeedPage} />
          <Cookies />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
