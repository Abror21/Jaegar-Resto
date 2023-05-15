import { forwardRef } from 'react'
import classes from './Card.module.css'
import Button from '../../../../components/Button'

const Card = forwardRef(({ meal }, ref) => {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3' ref={ref}>
            <div className={classes.card}>
                <div className={classes['card-item']}>
                    <img src={meal.url} alt={meal.title} />
                    <h6>{meal.title}</h6>
                    <span>$ {meal.price}</span>
                    <p>{meal.available} bowls available</p>
                    <Button title="Add"/>
                </div>
            </div>
        </div>
    )
})

export default Card