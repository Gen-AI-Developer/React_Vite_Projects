
const AdminPanel = () => {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => {
                return <div key={product.id}>
                    <li>
                        {product.title}
                    </li>
                </div>
            })}
        </div>
    );
}

export default AdminPanel;
