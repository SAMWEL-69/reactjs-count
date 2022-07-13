import React, {useState} from "react";


const Home = () => {
    const [count, setcount] = useState(0)

    function handleAdd(){
       // console.log("clicked")
       setcount(count+1)
    }
    function handlesubstraction(){
        setcount(count-1)
    }

    return (
        <div>
            <div className="card">
            <h2>{count}</h2>
            </div>
            <div>
            <button onClick={handlesubstraction}>-</button>
            <button onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}
export default Home;