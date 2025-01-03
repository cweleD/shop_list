export default function App() {
  return (
    <div className="shopping">
      <h1>Shopping Budget</h1>
      <Budget />
      <Form />
      <ProductList />
    </div>
  );
}

function Budget() {
  return (
    <>
      <form className="form-group">
        <label>Budget: </label>
        <input type="text" />
        <button>Add</button>
      </form>
      <p>Your budget is: R5000, shopping can be fun but please don't exceed!</p>
    </>
  );
}

function Form() {
  return (
    <form>
      <div className="form-group">
        <div className="input-field">
          <label>Product: </label>
          <input type="text" />
        </div>
        <div className="inputField">
          <label>price: </label>
          <input type="text" />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
}

function ProductList() {
  return (
    <ul>
      <Product />
    </ul>
  );
}

function Product() {
  return (
    <>
      <li>
        <span className="item">Product One</span>
        <span className="price">R450</span>
        <button>Delete</button>
      </li>
      <li>
        <span className="item">Product One</span>
        <span className="price">R450</span>
        <button>Delete</button>
      </li>
      <li>
        <span className="item">Product One</span>
        <span className="price">R450</span>
        <button>Delete</button>
      </li>
      <li>
        <span className="item">Product One</span>
        <span className="price">R450</span>
        <button>Delete</button>
      </li>
      <li>
        <span className="item">Product One</span>
        <span className="price">R450</span>
        <button>Delete</button>
      </li>
    </>
  );
}
