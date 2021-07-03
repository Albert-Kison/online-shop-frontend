import Header from "./Header"
import Main from "./Main"

function Home() {
    return (
        <div>
            <div className="main-header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
        </div>
    )
}

export default Home