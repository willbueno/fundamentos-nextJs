import Layout from "../components/Layout"

export function getServerSideProps() {
    return {
        props: {
            number: Math.random()
        }
}
}

export default function Dynamic(props) {
    return (
        <Layout title="Conteudo dinamico do lado do servidor">
            {props.number}
        </Layout>
    )
}