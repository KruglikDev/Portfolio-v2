import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {AnimatePresence} from "framer-motion";
import {lazy, Suspense} from "react";
import Loader from "./components/Loader";

const Model = lazy(() => import('./components/Model'));

const App = () => {
    return (
        <AnimatePresence initial={false}>
            <div
                className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
                <NavBar/>
                <Suspense fallback={<Loader/>}>
                    <Model/>
                </Suspense>
                <Info/>
                <Timeline/>
                <Projects/>
                <Contact/>
            </div>
        </AnimatePresence>
    );
}

export default App;