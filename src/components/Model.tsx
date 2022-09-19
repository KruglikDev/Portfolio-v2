import {lazy, useEffect, useState} from "react";
import Loader from "./Loader";

const Spline = lazy(() => import('@splinetool/react-spline'));

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const Model = () => {
    const [state, setState] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            className="w-full relative block flex justify-center top-20 items-center object-cover h-420 overflow-clip sm:h-685 sm:w-656"
            id='home'>
            {!state && <div className='-mt-20 mb-10 -top-16'><Loader/></div>}
            {windowDimensions.width > 640 ? <Spline
                    scene="https://prod.spline.design/0ZJKcbKsDVqfWU92/scene.splinecode"
                    style={{visibility: !state ? 'hidden' : 'visible'}}
                    width={windowDimensions.width - 20}
                    onLoad={() => setState(true)}
                /> :
                <Spline
                    scene="https://prod.spline.design/4JkGjuIcZe3NjtCz/scene.splinecode"
                    style={{visibility: !state ? 'hidden' : 'visible'}}
                    onLoad={() => setState(true)}
                />}

            {state && <div className='absolute bottom-10 w-full justify-center items-center flex top-96'>
                <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
                    <p className='text-textBase'>
                        Press and drag to orbit
                    </p>
                </div>
            </div>}
        </section>
    )
}

export default Model;