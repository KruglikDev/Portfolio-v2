import NavBar from "./conponents/NavBar";
import Model from "./conponents/Model";
import Info from "./conponents/Info";

const App = () => {
    return (
        <div
            className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
            <NavBar/>
            <Model/>
            <Info/>
        </div>
    );
}

export default App;