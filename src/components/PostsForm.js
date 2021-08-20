import {useState} from 'react'


const PostsForm = () => {
    const [inputValue, setValue] = useState({title:'',body:''});
    
    const onChange = function(event){
        setValue({...inputValue,
                [event.target.name]:event.target.value})
    }

    const onSubmit = async function(event){
        event.preventDefault();
        const postData = inputValue;
        
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
                                {method:'POST', 
                                headers:{'content-type':'application/json'},
                                body:JSON.stringify(postData)});
        const data = await res.json();
        console.log(data)

    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit} >
                <div>
                    <label htmlFor='title'>Title</label><br/>
                    <input name='title' type='text' value={inputValue.title} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor='body'>Body</label><br/>
                    <textarea name='body' type='text' value={inputValue.body} onChange={onChange} style={{resize:'none'}}/>
                </div>
                <div>
                   <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PostsForm;
