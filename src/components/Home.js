import Header from "./Header"
import Main from "./Main"

function Home() {
    return (
        <div>
            <div className="main-header">
                <Header />
            </div>
            <Main />
        </div>
    )
}

export default Home