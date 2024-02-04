import { useContext } from "react"
import { Modal, Button, Table } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa";
import { pizzaData } from ".."
import { orderCart } from "./App"

function Cart(props) {
  const path = "./assets/img/"
  const {size, pizza} = useContext(pizzaData)
  const {cartArr, dispatchCart} = useContext(orderCart)

  return (    
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> Order </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quant</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartArr.map((item, i) => {
              let p = pizza.find(p => p.id == item.id)
              return (
                <tr key={i}>
                  <td><img src={path + p.img} alt='' className="thumb" /></td>
                  <td>{p.title}</td>
                  <td>{size[item.size]}</td>
                  <td>{p.price[item.size]}₼</td>
                  <td>
                    <Button onClick={ ()=> dispatchCart({type: 'upd', payload: {id: i, quant: -1}}) } >-</Button>
                    {item.quant}
                    <Button onClick={ ()=> dispatchCart({type: 'upd', payload: {id: i, quant: 1}}) } >+</Button>
                  </td>
                  <td><b>{item.quant * p.price[item.size]}₼</b></td>
                  <td><FaTrashAlt onClick={ () => dispatchCart({type: 'del', payload: {id: i}}) } /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart