import { useContext, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { pizzaData } from ".."
import Item from "../components/Item"
import Filter from "../components/Filter"

function Pizza() {
  const {size, pizza} = useContext(pizzaData)
  const [pizzaList, setPizzaList] = useState(pizza)

  function applySearch(str) {
    setPizzaList( str ? pizzaList.filter(p => p.title.toLowerCase().includes(str.toLowerCase())) : pizza )
  }

  function applyFilters(filters) {
    setPizzaList(pizza.filter(obj => obj.filter.some(f => filters.includes(f))))
  }

  return (
    <>
      <h2>Pizza</h2>
      <Filter applyFilters={applyFilters} applySearch={applySearch} />
      <Row xs={1} md={2} lg={4} className="g-4">
      {pizzaList.map((p, i) => (
          <Item p={p} key={i} />
      ))}
    </Row>
    </>
  )
}

export default Pizza