import {socialLinks} from "../utils/data";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-evenly w-full"
        >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-10 px-10">
                {socialLinks &&
                    socialLinks.map((el, i) => (
                        <motion.a
                            whileTap={{scale: 0.8}}
                            href={el.link}
                            key={el.id + i}
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