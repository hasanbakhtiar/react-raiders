import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    emptyCart,
  } = useCart();

  return (
    <>
      {isEmpty ? (
        <div className="d-flex justify-content-center">
          <img
            width={400}
            src="https://silkbooth.com/media/wysiwyg/test/Cart_empty_page.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center flex-column">
          <p className="h1 my-5">Cart</p>
          <div className="col-9">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img src={item.image} width={100} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          removeItem(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="h3 my-5">
              Total Price: <span className="text-danger">${cartTotal}</span>
            </p>
            <button
              className="btn btn-danger"
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    emptyCart();
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                  }
                });
              }}
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
