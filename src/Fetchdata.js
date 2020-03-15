import React, { useEffect, useState} from 'react'
import axios from 'axios';

function Fetchdata() {
    const [posts,setPosts] = useState({});
    const [id,SetIds]      = useState(1);
    const [idbuttonclick,setidButtonclick] = useState(1)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${idbuttonclick}`)
            .then(res =>{
                //console.log(res);
                setPosts(res.data)
            })
            .catch(err =>{
                console.log(err);
            });
    },[idbuttonclick]);
   const hadleclick = () =>{
        setidButtonclick(id)
    }
    return (
        <div>
            <input ttpe="text" value={id} onChange={e=> SetIds(e.target.value)} />
            <button type="button" onClick={hadleclick}>fetch</button>
            <div>{posts.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title}</li>
                    ))}
            </ul> */}
        </div>
    )
}

export default Fetchdata;
