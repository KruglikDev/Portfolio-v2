import {lazy, useEffect, useState} from "react";

const Spline = lazy(() => import('@splinetool/react-spline'));

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const Model = () => {
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
            {windowDimensions.width > 640 ?
                <iframe src='https://my.spline.design/forbigiframe-25cd77cff9c3269af03574d108805ee9/'
                        width='100%' height='100%'></iframe>
                : (<iframe src='https://my.spline.design/foriframe-8fa0f5cc534cf9ab81e8da46de63e091/' frameBorder='0'
                           width='360px' height='100%'></iframe>)}

            <div className='absolute bottom-10 justify-center items-center flex top-96 w-full'>
                <div
                    className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl w-full sm:w-auto mx-4'>
                    <p className='text-textBase'>
                        Press and drag to orbit
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Model;