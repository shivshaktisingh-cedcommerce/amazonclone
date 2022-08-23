import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { UserContext } from "./Mycontext";
import { useContext, useState, useEffect } from "react";
import Data from "./Data";

export const Checkout = (props) => {
  const [flag, setflag] = useState("none");
  const obj = useContext(UserContext);
  // Showing total bill
  var temp = 0;
  obj.product.map((data) => (temp += data.total));

  // Delete product from cart
  const del = (id) => {
    const prod = obj.product.filter((i) => i.id !== id);
    obj.product.map((i) => {
        if (i.id === id) {
          i.quantity = 1;
          i.total = i.quantity * i.price;
        }
      });
    obj.setproduct([...prod]);
    console.log(obj.product)
    console.log(Data)
  };

  // Increase quantity
  const increase = (id) => {
    obj.product.map((i) => {
      if (i.id === id) {
        i.quantity = i.quantity + 1;
        i.total = i.quantity * i.price;
        obj.setproduct([...obj.product]);
      }
    });
  };

  // Decrease Quantity
  const decrease = (id) => {
    obj.product.map((i) => {
      if (i.id === id) {
        if (i.quantity > 1) {
          i.quantity = i.quantity - 1;
          i.total = i.quantity * i.price;
          obj.setproduct([...obj.product]);
        }
      }
    });
  };

  //   Generate Bill
  const generate = () => {
    if (obj.loggedin === false) {
      alert("Please login first!");
    } else {
      setflag("block");
    }
  };

  // Checkout
  const userCheckout = () => {
    setflag("none");
    obj.setproduct([]);
    alert("Thank You , Your order has been placed!");
  };

  return (
    <>
      {obj.product.length === 0 ? (
        <>
          <h1 className="heading" style={{ textAlign: "center" }}>
            Your Amazon Cart is empty!
          </h1>
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt="png"
          />{" "}
        </>
      ) : (
        <>
          <h1 className="heading">Your Cart Items:</h1>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {obj.product.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th">{index + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      <img
                        src={row.image}
                        alt="img"
                        style={{ width: "20%", height: "20%" }}
                      />
                    </TableCell>
                    <TableCell>{row.price}</TableCell>

                    <TableCell>
                      <span>
                        <button onClick={() => decrease(row.id)} id={row.id}>
                          -
                        </button>{" "}
                      </span>
                      {row.quantity}{" "}
                      <button onClick={() => increase(row.id)} id={row.id}>
                        +
                      </button>
                    </TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>
                      <button id={row.id} onClick={() => del(row.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Generating Bill */}
          {obj.product.length > 0 ? (
            <Button
              variant="contained"
              sx={{ marginLeft: "4%", marginTop: "2%" ,backgroundColor:"#cd904d",color:"whitesmoke"}}
              onClick={generate}
            >
              Generate Bill
            </Button>
          ) : (
            ""
          )}
          <TableContainer style={{ display: flag }}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {obj.product.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <span>{index + 1}. </span>
                      {row.name}
                    </TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Total amount to pay : {temp}
                  </TableCell>
                  <TableCell>
                    <Button  variant="contained" onClick={userCheckout} className="checkoutbtn" sx={{backgroundColor:"#cd904d",color:"whitesmoke"}}>
                      Proceed to checkout
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};
