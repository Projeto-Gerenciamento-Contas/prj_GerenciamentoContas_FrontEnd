import React from 'react'
import UserDetails from '../components/UserDetails'
import ShowUserName from '../components/ShowUserName'

const Pagina2 = () => {
  const users = [{ id: 1001, nome: "Tom", idade: 19, profissao: "só dorme" },
  { id: 1002, nome: "Lisa", idade: 20, profissao: "Aprendiz" },
  { id: 1003, nome: "Jão", idade: 17, profissao: "só dorme" },
  { id: 1004, nome: "Ciclano", idade: 16, profissao: "Desenvolvedor" },
  { id: 1005, nome: "Fulano", idade: 23, profissao: "Desenvolvedor Senior" },]
  return (
    <main>
      <section>
        <div>Página 2</div>
        <p>
          Esta página criada na aula de Laboratório de Desenvolvimento Web utiliza components.
        </p>
        <div>
          <br/>
          <ShowUserName name='Ciclano' />
          <br/>
          {users.map((users) => (
            <UserDetails
              key={users.id}
              nome={users.nome}
              idade={users.idade}
              profissao={users.profissao} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Pagina2