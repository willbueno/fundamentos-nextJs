import Navegation from "../components/Navegation"

export default function Index() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegation text="Stylish" destiny='/stylish' />
            <Navegation text="Example" destiny='/example' color='#9400d3' />
            <Navegation text="JSX" destiny='/jsx' color='crimson' />
            <Navegation text="Navegacao #01" destiny='/navegation' color='green' />
            <Navegation text="Navegacao #02" destiny='/client/sp/321' color='blue' />
            <Navegation text="Componente com estado" destiny='/state' color='#a45b71' />
            <Navegation text="Integracao com API" destiny='/integration' color='#42a9a9' />
            <Navegation text="Conteudo estatico" destiny='/static' color='#fa054a' />
            <Navegation text="Conteudo dinamico" destiny='/dynamic' color='#fa054a' />
        </div>
    )
}