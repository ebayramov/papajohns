import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Cart from "./Cart"
import { createContext, useReducer, useState } from "react"
import reduce from "./reduce"

const orderCart = createContext([])

function App() {
    const [modalShow, setModalShow] = useState(false)
    const [cartArr, dispatchCart] = useReducer(reduce, [])

    return (
        <orderCart.Provider value={{cartArr, dispatchCart}}>
            <Header cartOpen={setModalShow} />
            <main className="py-5">
                <Container className="pt-5">
                    <Outlet />
                </Container>
            </main>
            <Footer />
            <Cart show={modalShow} onHide={() => setModalShow(false)} />
        </orderCart.Provider>
    )
}

export default App
export {orderCart}