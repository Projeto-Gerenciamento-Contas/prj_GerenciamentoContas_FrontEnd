import React from 'react'

const CarDetails = ({ marca, km, cor, ano }) => {
    return (
        <div>
            <h2>Carro</h2>
            <ul>
                <li>marca: {marca}</li>
                <li>Kilometragem: {km} mil km</li>
                <li>cor: {cor}</li>
                <li>ano: {ano}</li>
                {km == 0 ? (<p>Novo</p>) :  km <20 ? (<p>Seminovo</p>) : (<p>Usado</p>)}            </ul>
        </div>
    )
}

export default CarDetails