import { GithubIcon, AiOutlineDashboard } from "../assets/icons";

export const SidebarItemsMain = [

    {
        name: "Dashboard",
        route: '/',
        icon: <AiOutlineDashboard />
    },
];

export const SidebarItemsResources = [
    {
        name: "GitHub",
        href: '/github',
        icon: <GithubIcon />
    },
]
export default SidebarItemsMain;