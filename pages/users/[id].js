import styles from "../../styles/User.module.scss"
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User with id {user.id}</h1>
                <h2>User name - {user.name}</h2>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}, // will be passed to the page component as props
    }
}
