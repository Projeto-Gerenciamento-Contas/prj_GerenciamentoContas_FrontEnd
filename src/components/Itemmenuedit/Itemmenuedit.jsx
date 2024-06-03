
import React from 'react'
import edit from '../../assets/EditarW.svg'
import {Link} from 'react-router-dom'
const Itemmenuedit = ({ img, gastos, data,link }) => {
    return (
        <>
            <div className="grid">
                <div className="item"><img src={img} alt="img" /></div>
                <div className="display=inline-flex ">
                    <div className='menuitem'>{gastos}</div>
                    <div className='menuitem2'>{data}</div>
                </div>
                <div className="item">
                    <Link to={link}>
                        <img src={edit} alt="img" />
                    </Link>
                </div>
            </div>

        </>

    )
}

export default Itemmenuedit

