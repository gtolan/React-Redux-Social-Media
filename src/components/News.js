import Posts from './Posts';
import PostsForm from './PostsForm';
import Navbar from './Navbar';

const News = () => {
    return (
        <div>
        <Navbar />
        <header className="App-header">
            <PostsForm />
            <hr/>
            <Posts />
        </header>
        </div>
    )
}

export default News;
