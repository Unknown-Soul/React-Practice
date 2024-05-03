import { useSelector } from "react-redux";
import HomeIteams from "../components/HomeIteams";

const Home = () => {
    const item = useSelector(store => store.items);
    { console.log(item); }
    return <div className="items-container">
        {item.map(item => <HomeIteams key={item.id} item={item} ></HomeIteams>)}
    </div>
}

export default Home;