import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWhatsapp,
} from "react-icons/io5";

export const Experience = [
    {
        id: 1,
        date: "2016 - present",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 2,
        date: "2014 - 2016",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 3,
        date: "2012 - 2014",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 4,
        date: "2011 - 2012",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 5,
        date: "2010 - 2011",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
];

export const projects = [
    {
        id: 1,
        name: "Food Delivery UI Mockup",
        imageSrc: '/',
        techs: "React Js, Redux, Material UI",
        github: "#",
    },
    {
        id: 2,
        name: "Full Stack Social Media App ",
        imageSrc: '/',
        techs: "React Js, Sanity, Tailwind CSS",
        github: "#",
    },
    {
        id: 3,
        name: "Travel Advisor",
        imageSrc: '/',
        techs: "React Js, Chakra UI, Google API",
        github: "#",
    },
    {
        id: 4,
        name: "Pintrest UI Clone 2.0 ",
        imageSrc: '/',
        techs: "React Js,  Material UI",
        github: "#",
    },
    {
        id: 5,
        name: "Own Video Blog",
        imageSrc: '/',
        techs: "React Js, Chara UI, Firebase",
        github: "#",
    },
    {
        id: 6,
        name: "Whatsapp UI Clone",
        imageSrc: '/',
        techs: "NextJs, Firebase Auth",
        github: "#",
    },
];

export const socialLinks = [
    {
        id: 1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>,
        name: "GitHub",
        link: "#",
    },
    {
        id: 1,
        iconSrc: (
            <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer"/>
        ),
        name: "LinkedIn",
        link: "#",
    },
    {
        id: 1,
        iconSrc: (
            <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer"/>
        ),
        name: "Whatsapp",
        link: "#",
    },
];