import me from '../images/me.jpg';
import {motion} from "framer-motion";

const Info = () => {
    return (
        <main className='w-[80%] lg:w-[70%] mt-5'>
            <section
                className='w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mt-24 mb-28'
                id='about'
            >
                <div className='mb-10 w-full h-440 flex items-center justify-center md:mb-0'>
                    <div className='w-275 h-340 bg-blue-200 rounded-md relative'>
                        <img
                            className='shadow-lg w-full h-full absolute -right-4 top-4 object-cover rounded-lg'
                            src={me}
                            alt="Andrey Kruglik"
                        />
                    </div>
                </div>

                <div className='w-full h-440 flex flex-col items-center justify-center md:ml-4'>
                    <p className='text-textBase text-center lg:text-lg'>
                        Frontend developer is the speciality in which I want to grow and develop as a specialist.
                        I learned everything by myself, step by step, to offer you the best practices and modern coding
                        techniques, never stopped learning new frameworks and libraries, creating new applications and
                        websites.
                    </p>
                    <br/>
                    <p className='text-textBase text-center lg:text-lg'>
                        Today, having tools such as Typescript, Javascript, React, React Native, Redux, Redux Toolkit,
                        SCSS, Axios, Formik and many others on my belt, I can create a site of any complexity, both with
                        adaptive layout or with adaptive, no matter how many animations it needs to have or what device
                        it needs to look great on.
                    </p>

                    <a href="./Resume(ak).pdf" download>
                        <motion.button
                            whileTap={{scale: .8}}
                            className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                        >
                <span
                    className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download Resume
                </span>
                        </motion.button>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Info;