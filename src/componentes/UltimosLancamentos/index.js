import { livros } from '../UltimosLancamentos/DadosUltimosLancamentos.js'
import { Titulo } from '../Titulo/index.js'
import CardRecomenda from '../CardRecomenda/index.js'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt='livros'/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez voce se interrese por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos