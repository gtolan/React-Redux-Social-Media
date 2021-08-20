import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import { Provider } from 'react-redux'
import './App.css';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
