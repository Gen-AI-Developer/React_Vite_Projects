import { useState } from 'react';
const AdminPanel = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    // const products = [
    //     { title: 'Cabbage', id: 1 },
    //     { title: 'Garlic', id: 2 },
    //     { title: 'Apple', id: 3 },
    // ];

    return (
        <div>
            <button onClick={handleClick}>
                This is a button
            </button>
            <h1>Counter : {count}</h1>
        </div>

        // <div>
        //     <h1>Products</h1>
        //     {products.map((product) => {
        //         return <div key={product.id}>
        //             <li>
        //                 {product.title}
        //             </li>
        //         </div>
        //     })}
        // </div>
    );
}

export default AdminPanel;
