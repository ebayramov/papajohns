import { useContext, useState } from "react"
import { Button, Card, Col, Form } from "react-bootstrap"
import { pizzaData } from ".."
import { orderCart } from "./App"

function Item({p}) {
    const path = "./assets/img/"
    const [quant, setQuant] = useState(1)
    const [currSize, setCurrSize] = useState( Object.keys(p.price)[0] )
    const {size, pizza} = useContext(pizzaData)
    // const {cartArr, add2Cart} = useContext(orderCart)
    const {cartArr, dispatchCart} = useContext(orderCart)
    return (
        <Col>
            <Card>
                <Card.Img src={path + p.img} variant="top" />
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>{p.ingr}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Form.Select onChange={ (e) => setCurrSize(e.target.value) } value={currSize}>
                    {
                        Object.keys(p.price).map( (s, i) => <option key={i} value={s}>{ size[s] }</option> )
                    }
                    </Form.Select>
                    <div className="d-flex justify-content-between py-3">
                        <div>
                            <button onClick={ () => quant > 1 ? setQuant( quant - 1 ) : 1 }>-</button>
                            <span className="px-2">{quant}</span>
                            <button onClick={ () => setQuant( quant + 1 ) }>+</button>
                        </div>
                        <b className="fs-4">{quant * p.price[currSize]}₼</b>
                    </div>
                    <div className="d-grid gap-2">
                        <Button onClick={ ()=> dispatchCart({
                                type:'add', 
                                payload: {id: p.id, size: currSize, quant: quant}
                            }) } 
                            variant="warning" size="lg">
                            Eat me
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
  )}

export default Item