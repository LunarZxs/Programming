import { useState } from 'react'
import BlogList from './BlogList';
import Name from './Name'
import useFetch from './useFetch';

const Home = () => {

   const{data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    const[name, setName] = useState([
        {title: 'mario', name:'HELLO'}, 
        {title:'something', name:'js'}])

    //testing the useeffect
    const [testName, setTestName] = useState('name')

    const handClick= () => {
        setName([{title: 'd'}, {title:'new', name: name[0].name}],)
    }

    // const handlerClick=(id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {/*If left side is true, then it shows the bloglist*/ }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"UserBlogs"}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Me')}/>} 
            <Name name = {name} handClick={handClick}/> 
            <p>{testName}</p>
            {/*When clicked, change the name of the paragraph above*/}
            <button onClick={() => setTestName('change name')}>Click Me</button>
        </div>
     );
}
 
export default Home;