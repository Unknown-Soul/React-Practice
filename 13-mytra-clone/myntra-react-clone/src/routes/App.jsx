import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FetchItem from '../components/FetchItem';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return <>
    <Header/>
    <FetchItem/>
     {fetchStatus.currentlyFetching ? <Loading/>: <Outlet/>}
    {/* <Outlet /> */}
    <Footer />
  </>
}

export default App
