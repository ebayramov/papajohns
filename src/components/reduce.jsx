function reduce(cartArr, {type, payload: {id, size, quant} }) {
    switch (type) {
        case 'add': 
            return (cartArr.some(item => item.id === id && item.size === size)) ?
                cartArr.map( item => (item.id === id && item.size === size) ? {...item, quant: item.quant + quant} : item  ) :
                [...cartArr, {id, size, quant} ]
        case 'del':
            return cartArr.filter((item, i) => i !== id)
        case 'upd':
            return cartArr.map((item, i) => i === id ? {...item, quant: item.quant += quant } : item )
    }
}

export default reduce