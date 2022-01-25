import Layout from "../../../components/Layout"
import { useRouter } from "next/router"

export default () => {
    const router = useRouter()

    return (
        <Layout titlle='Navegacao dinamica'>
            <div>Codigo = {router.query.code}</div>
            <div>Filial = {router.query.subsidiary}</div>
        </Layout>
    )
}