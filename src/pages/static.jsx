import Layout from "../components/Layout"

export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
}
}

export default function Static(props) {
    return (
        <Layout title="Conteudo estatico">
            {props.number}
        </Layout>
    )
}