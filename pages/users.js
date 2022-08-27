import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer keywords={"users"}>
            <h1>User list</h1>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        <Link href={`/users/${u.id}`}>
                            <a>{u.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return {
        props: {users}, // will be passed to the page component as props
    }
}
