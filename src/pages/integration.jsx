import { useState } from "react"
import Layout from "../components/Layout"

export default () => {
    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    async function getClient() {
        const resp = await fetch(`http://localhost:3000/api/clients/${code}`)
        const data = await resp.json()
        setClient(data)

        // fetch(`http://localhost:3000/api/clients/${code}`)
        //     .then(resp => resp.json())
        //     .then(data => setClient(data))
    }

    return (
        <Layout title="Mais um exemplo">
            <div>
                <input type="number" value={code}
                    onChange={e => setCode(e.target.value)} />
                <button onClick={getClient}>Obter cliente</button>
            </div>
            <ul>
                <li>Codigo: {client.id}</li>
                <li>Nome: {client.name}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    )
}