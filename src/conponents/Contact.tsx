import {socialLinks} from "../utils/data";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
        >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
                {socialLinks &&
                    socialLinks.map((el) => (
                        <motion.a
                            whileTap={{scale: 0.8}}
                            href={el.link}
                            key={el.id}
                            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                        >
                            {el.iconSrc}
                            <p className="text-lg text-textBase">{el.name}</p>
                        </motion.a>
                    ))}
            </div>
        </section>
    )
}

export default Contact;