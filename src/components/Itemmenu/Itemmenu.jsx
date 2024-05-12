import React from 'react'
import Card from 'react-bootstrap/Card';

const Itemmenu = ({ img, gastos, data }) => {
    return (
        <>
            <div class="grid">
                <div class="item"><img src={img} alt="img" fill='#ffffff' /></div>
                <div class="grid">
                    <li className='item'>{gastos}</li>
                    <li className='item'>{data}</li>
                </div>
                <div class="item"><img src={img} alt="img" /></div>
            </div>
          
        </>

    )
}

export default Itemmenu

