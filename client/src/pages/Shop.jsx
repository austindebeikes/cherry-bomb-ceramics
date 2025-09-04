export default function Shop() {
    return (
      <div className="container mt-5">
        <h1>Shop</h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">This is a cool product.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Another awesome item.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Don’t miss this one!</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  