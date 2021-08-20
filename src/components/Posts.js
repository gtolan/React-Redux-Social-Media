import {useEffect, useState} from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
 
    
    useEffect(() => {
        async function fetchData (){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res, 'res1')
            const data = await res.json();
            console.log(data)
            setPosts(data)
        }
        fetchData()
    }, [])

    const postItems =
        posts && posts.length > 0 ? (posts.map(post => (
        <p key={post.id}>{post.title}</p>
    ))) : ('No posts');


    return (
        <div>
            <h1>Posts</h1>
            { postItems }
        </div>
    );
}

export default Posts;
