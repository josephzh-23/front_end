import { useEffect, useState } from "react";


export const Posts = () => {


    const [posts, setPosts] = useState([]);
    console.log('i came here');
    useEffect(() => {
        let isCancelled = false;
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                if (!isCancelled) {

                    // alert('posts are ready ')
                    setPosts(data)
                    console.log(data);
                }
            })

        return () => {
            isCancelled = true
        }

    }, [])

    return (
        <div>
            {posts?.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    )
}