import Header from './Header';
import './index.css';

function Bag() {
    return <>
        <Header />
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                </div>
                <div className="bag-summary">
                </div>

            </div>
        </main>
        <Footer />
    </>
}