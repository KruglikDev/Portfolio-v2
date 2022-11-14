import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWhatsapp,
} from "react-icons/io5";

//Portfolio images
import goldenbee from '../images/goldenbee.png';
import kozhindev from '../images/kozhindev.png';
import ignite from '../images/ignite.png';
import marvel from '../images/marvel.png';
import waves from '../images/waves.png';
import capture from '../images/capture.png';
import krypt from '../images/krypt.png';

//Icons
import {ReactComponent as ReactIcon} from "../icons/react.svg";
import {ReactComponent as SassIcon} from "../icons/sass.svg";
import {ReactComponent as RouterIcon} from "../icons/react-router.svg";
import {ReactComponent as ReduxIcon} from "../icons/redux.svg";
import {ReactComponent as StyledIcon} from "../icons/styled.svg";
import {ReactComponent as FramerIcon} from "../icons/framer.svg";
import {ReactComponent as Typescript} from "../icons/typescript.svg";
import {ReactComponent as FormikIcon} from "../icons/formik.svg";
import {ReactComponent as ViteIcon} from '../icons/vite.svg';
import {ReactComponent as TailwindIcon} from '../icons/tailwind.svg';
import {ReactComponent as SolidityIcon} from '../icons/solidity.svg';

export const Experience = [
    {
        id: 1,
        date: "01.2022 - 06.2022",
        iconsSrc: <IoCodeWorking/>,
        title: "FrontEnd Developer",
        company: "KozhinDev Studio",
        location: "Krasnoyarsk, Russia",
        description:
            [
                'Kozhindev is a large studio in the center of Siberia that uses the self-written Steroids framework (which has react under the hood in conjunction with redux). In it, I honed my teamwork skills, constantly interacted with designers and other developers to make the product professionally and quickly. Worked in weekly sprints via git-flow. Managed to work on three projects:',
                'Finished a half-finished corporate site, added animations, adapted it for mobile devices and tablets, filled it with content, replaced images with webp and optimized them to speed up the site.',
                'I was engaged in the development of a site for luxury real estate from the beginning to delivery to the client, adapted it for all devices, added a dynamic map that displays the property, stylized it to the needs of the customer.',
                'Programmed an application for shopping in the Komandor supermarket chain, written in React Native.'
            ],
    },
    {
        id: 2,
        date: "01.2021 - 11.2021",
        iconsSrc: <IoCodeWorking/>,
        title: "Trainee/Junior FrontEnd Developer",
        company: "24Pixels Studio",
        location: "Krasnoyarsk, Russia",
        description: [
            'Worked in a team with 4 other trainees, worked on 5 different projects, interacted with designers and developers, made up according to figma and psd layouts, worked according to the agile method, weekly sprints through git-flow, programmed sliders, forms, sidebars, adapted sites for mobile devices and tablets, did a lot of responsive, adaptive and responsive layout, did cross-browser layout (ResetCSS and NormalizeCSS, Autoprefixer), used Aria and semantic layout so that people with disabilities could use sites, learned how to use SASS and LESS preprocessors, BEM methodology, often used Bootstrap for quick layout, converted sites into installable PWA applications.'
        ]
    },
];

export const projects = [
    {
        id: 1,
        name: "GoldenBee",
        imageSrc: goldenbee,
        link: "https://goldenbee.estate",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <ReduxIcon width='30px' height='30px'/>,
            <RouterIcon width='30px' height='30px'/>,
            <Typescript width='30px' height='30px'/>,
            <SassIcon width='30px' height='30px'/>
        ],
    },
    {
        id: 2,
        name: "KozhinDev",
        imageSrc: kozhindev,
        link: "https://kozhindev.com",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <ReduxIcon width='30px' height='30px'/>,
            <RouterIcon width='30px' height='30px'/>,
            <Typescript width='30px' height='30px'/>,
            <SassIcon width='30px' height='30px'/>
        ],
    },
    {
        id: 3,
        name: "Marvel Portal",
        imageSrc: marvel,
        link: "https://hungry-curie-192bea.netlify.app/",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <RouterIcon width='30px' height='30px'/>,
            <FormikIcon width='30px' height='30px'/>,
            <SassIcon width='30px' height='30px'/>,
        ],
    },
    {
        id: 4,
        name: "Waves",
        imageSrc: waves,
        link: "https://affectionate-curran-cbb49b.netlify.app/",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <SassIcon width='30px' height='30px'/>
        ],
    },
    {
        id: 5,
        name: "Ignite",
        imageSrc: ignite,
        link: "https://stupefied-northcutt-cb1b60.netlify.app/",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <ReduxIcon width='30px' height='30px'/>,
            <RouterIcon width='30px' height='30px'/>,
            <StyledIcon width='30px' height='30px'/>,
            <FramerIcon width='30px' height='30px'/>,
            <Typescript width='30px' height='30px'/>,
        ],
    },
    {
        id: 6,
        name: "Capture",
        imageSrc: capture,
        link: "https://relaxed-nobel-9a0077.netlify.app/",
        icons: [
            <ReactIcon width='30px' height='30px'/>,
            <RouterIcon width='30px' height='30px'/>,
            <StyledIcon width='30px' height='30px'/>,
            <FramerIcon width='30px' height='30px'/>,
        ],
    },
    {
        id: 7,
        name: "Krypt",
        imageSrc: krypt,
        link: "https://whimsical-macaron-da4620.netlify.app/",
        icons: [
            <SolidityIcon width='30px' height='30px'/>,
            <ReactIcon width='30px' height='30px'/>,
            <ViteIcon width='30px' height='30px'/>,
            <TailwindIcon width='30px' height='30px'/>,
            <Typescript width='30px' height='30px'/>,
        ],
    },
];

export const socialLinks = [
    {
        id: 1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>,
        name: "GitHub",
        link: "https://github.com/KruglikDev",
    },
    {
        id: 1,
        iconSrc: (
            <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer"/>
        ),
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kruglikdev/",
    },
    {
        id: 1,
        iconSrc: (
            <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer"/>
        ),
        name: "Whatsapp",
        link: "https://wa.me/+79994458551",
    },
];