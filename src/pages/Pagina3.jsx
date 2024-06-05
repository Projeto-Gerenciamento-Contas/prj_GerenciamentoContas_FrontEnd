import React from 'react'
import CarDetails from '../components/CarDetails'

const Pagina3 = () => {
  const cars = [
    { id: 1001, marca: "Fiat", km: 650, cor: "Cinza", ano: "2000" },
    { id: 1002, marca: "Ford", km: 19, cor: "Preto", ano: "2015" },
    { id: 1003, marca: "Toyota", km: 0, cor: "Branco", ano: "2021" },
    { id: 1004, marca: "XingXong", km: 10, cor: "Prata", ano: "2020" },
    { id: 1005, marca: "Fiat", km: 20, cor: "Azul Escuro", ano: "2018" }
  ]

  return (
    <main>
    <section>
    <div>Página 3</div>
    <p>
      Esta é a página 3 da primeira aplicação quase completa criada na aula de Laboratório de Desenvolvimento Web.
    </p>
    <div>
       
       {cars.map((cars) => (
         <CarDetails
           key={cars.id}
           marca={cars.marca}
           km={cars.km}
           cor={cars.cor} 
           ano={cars.ano}/>
       ))}
     </div>

    </section>
  </main>
  )
}

export default Pagina3