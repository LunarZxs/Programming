const Home = () => {

    const handleClick = () =>{
        console.log("Hello World")
    }

    const handleClickAgain = (name) =>{
        console.log("Hello " + name)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>CLick Me</button>
            {/* This doesn't invoke staright away */}
            <button onClick = {() => handleClickAgain('Ranul')}>CLick Me Again</button>
        </div>
     );
}
 
export default Home;