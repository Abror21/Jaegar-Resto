import React from 'react'

const EmptyCart = () => {
    return (
        <div>
            <h4>Orders</h4>
            <img src={orderImg} alt="No order" />
            <h5>No Order</h5>
            <span>Go find the products you like</span>
            <button></button>
        </div>
    )
}

export default EmptyCart