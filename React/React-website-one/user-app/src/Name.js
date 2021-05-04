const Name = ({name, handClick}) => {

    return(
        <div className="personName">
            <p>{name[1].title } and {name[1].name}</p>
            <button onClick={handClick}>Click Here</button>
        </div>
    )
}

export default Name