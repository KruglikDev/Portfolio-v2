import {lazy, useState} from "react";
import Loader from "./Loader";

const Spline = lazy(() => import('@splinetool/react-spline'));

const Model = () => {
    const [state, setState] = useState(false);

    return (
        <section className="relative block mt-20 top-12 flex justify-center items-center object-cover" id='home'>
            {!state && <div className='-mt-20 mb-10 -top-16'><Loader/></div>}
            <Spline
                scene="https://prod.spline.design/WqAqUDqtpxB9lX9h/scene.splinecode"
                height='600px'
                style={{visibility: !state ? 'hidden' : 'visible'}}
                onLoad={() => setState(true)}
            />


            {state && <div className='absolute bottom-10 w-full justify-center items-center flex'>
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