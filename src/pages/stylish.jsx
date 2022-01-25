import styles from '../styles/Stylish.module.css'
import Link from 'next/link'

export default props => {
    return (
        <div className={styles.roxo}>
            <Link href='/'>Voltar</Link>
            <h1>Estilo usando CSS modulos</h1>
        </div>
    )
}