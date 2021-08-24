import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import './App.css';
import store from './store/init.js'
import mockSocialMediaData from './mock/social-media-api'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <PostsForm />
          <hr/>
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
