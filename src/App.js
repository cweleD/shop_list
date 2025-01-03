import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  function addItem(product) {
    setProducts((products) => [...products, product]);
  }

  function deleteItem(id) {
    setProducts((product) => product.filter((product) => product.id !== id));
  }

  return (
    <div className="shopping">
      <h1>Shopping Budget</h1>
      <Budget />
      <Form onAddItem={addItem} />
      <ProductList products={products} deleteItem={deleteItem} />
    </div>
  );
}

function Budget() {
  const [budget, setBudget] = useState("");

  return (
    <>
      <label>Budget: </label>
      <input
        type="text"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <p>
        Your budget is: R{budget}, shopping can be fun but please don't exceed!
      </p>
    </>
  );
}

function Form({ onAddItem }) {
  const [shopProduct, setShopProduct] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newShopList = { shopProduct, price, id };
    onAddItem(newShopList);

    setShopProduct("");
    setPrice(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-field">
          <label>Product: </label>
          <input
            type="text"
            value={shopProduct}
            onChange={(e) => setShopProduct(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label>price: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
}

function ProductList({ products, index, deleteItem }) {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} deleteItem={deleteItem} />
      ))}
    </ul>
  );
}

function Product({ product, deleteItem }) {
  return (
    <>
      <li>
        <span className="item">{product.shopProduct}</span>
        <span className="price">R{product.price}</span>
        <button onClick={() => deleteItem(product.id)}>Delete</button>
      </li>
    </>
  );
}
