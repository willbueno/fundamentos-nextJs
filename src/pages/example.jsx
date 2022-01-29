import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Example() {
    return (
        <Layout title='Usando components'>
            <Header title="Fundamento de Next.js & React" />
            <Header title="Aprendendo next na pratica" />
        </Layout>
    )
}