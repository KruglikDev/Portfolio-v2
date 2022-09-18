import {projects} from '../utils/data.js';

const Projects = () => {
    return (
        <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4 px-10 max-w-7xl"
            id="projects"
        >
            {projects && projects.map((el, i) => (
                <a href={el.link} key={el.id}>
                    <div
                        className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[360px] hover:border-zinc-600 duration-100 ease-in-out"
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
                                <div className="flex gap-2">
                                    {el.icons?.map((icon, i) => <div key={i}>{icon}</div>)}
                                </div>
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default Projects;