import cardStyles from '../styles/card.module.css'
import axios from 'axios';

type profile = {
    data: string,
}

const MyPage: React.FC<profile> =({ data }) => {
    return (
        <div>
            <h1>My Page</h1>
            <ul>
                <p>This is a slug page</p>
            </ul>
        </div>
    );
}
export async function getServerSideProps() {

    const response = await axios.get('https://my-api.com/my-data');
    const data = response.data;

    // Pass data tot he page component as props
    return { props: data  };
}

export default MyPage;