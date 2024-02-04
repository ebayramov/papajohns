import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

const filterArr = ["meat", "chick", "vegan", "spicy"]

function Filter({applyFilters, applySearch}) {
    const [filters, setFilters] = useState(filterArr)

    function filterChange(val) {
        setFilters( filters.includes(val) ? filters.filter(f => f !== val) :
                                            [...filters, val] )
    }

    useEffect( ()=> applyFilters(filters), [filters])

    return (
        <div className='filter'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={ (e) => applySearch(e.target.value) } type="text" placeholder="Ada görə axtar.." />
                </Form.Group>
                <div className="mb-3">
                    {filterArr.map((f, i) => 
                        <Form.Check onChange={() => filterChange(f)} checked={filters.includes(f)} key={i} label={f} type="checkbox" inline />
                    )}
                </div>
            </Form>        
        </div>
    )
}

export default Filter