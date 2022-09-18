import Spline from "@splinetool/react-spline";

const Model = () => {
    return (
        <section className="relative block mt-20 flex justify-center items-center object-cover" id='home'>
            <Spline
                scene="https://prod.spline.design/WqAqUDqtpxB9lX9h/scene.splinecode"
                height='600px'
            />

            <div className='absolute bottom-10 w-full justify-center items-center flex'>
                <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
                    <p className='text-textBase'>
                        Press and drag to orbit
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Model;