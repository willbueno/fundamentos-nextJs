import Navegation from "../components/Navegation"

export default () => {
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
        </div>
    )
}