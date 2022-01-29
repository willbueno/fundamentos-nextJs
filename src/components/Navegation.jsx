import styles from '../styles/Navegation.module.css'
import Link from "next/link"

export default function NAvegation(props) {

    return (
        <Link href={props.destiny}>
            <div className={styles.navegation} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.text}
            </div>
        </Link>
    )
}