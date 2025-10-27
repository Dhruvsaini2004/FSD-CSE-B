function book(book){
    return (
        <div className='card'>
            <img src={book.image} height='200' width='200'/>
            <h3>Title:{book.title}</h3>
            <h4>Title:₹{book.price}</h4>
            <button>Add to cart</button>
        </div>
    )
}

const books=[{
    image:'',title:'Maths',price:'756'},
    {image:'',title:'Physics',price:'856'},
    {image:'',title:'Chemistry',price:'654'
}]
function app(){
    return (
        <div>
            {books.map((b,i)=>(
                <book key={i} book={b}/>
            ))}
        </div>
    )
}

const parent=document.getElementById("root");
const root=ReactDOM.create