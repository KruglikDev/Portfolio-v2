import NavBar from "./conponents/NavBar";
import Model from "./conponents/Model";

const App = () => {
    return (
        <div
            className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
            <NavBar/>
            <Model/>
        </div>
    );
}

export default App;