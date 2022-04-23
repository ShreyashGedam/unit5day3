function Category({image , name})
{
    return (
        <div className="bar">
            <img src = {image}/>
            <p>{name}</p>
        </div>
    )
}

export {Category};