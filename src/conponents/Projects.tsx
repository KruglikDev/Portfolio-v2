import {projects} from '../utils/data.js';
import {IoLogoGithub} from "react-icons/io5";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
        >
            {projects && projects.map((el, i) => (
                <div
                    key={el.id}
                    className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                    <p className="text-lg text-textBase font-medium uppercase">
                        {el.name.length > 24 ? `${el.name.slice(0, 24)}...` : el.name}
                    </p>

                    <img
                        src={el.imageSrc}
                        className="w-full h-full object-cover rounded-md my-4"
                        alt=""
                    />

                    <div className="flex flex-1 items-center justify-between">
                        <p className="text-lg text-gray-300">
                            Technologies
                            <span className="block text-sm text-gray-500">
                        {el.techs}
                      </span>
                        </p>
                        <a href={el.github}>
                            <motion.div whileTap={{scale: 0.8}}>
                                <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                            </motion.div>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects;