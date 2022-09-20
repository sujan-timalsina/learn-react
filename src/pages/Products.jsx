import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><Link to="/products/p1">Smartphone</Link></li>
                <li><Link to="/products/p2">Laptop</Link></li>
                <li><Link to="/products/p3">PC</Link></li>
            </ul>
        </section>
    );
};

export default Products;