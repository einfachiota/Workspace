import { GithubIcon, AiOutlineDashboard, MeetIcon, TeamNoes } from "../assets/icons";

export const SidebarItemsMain = [

    {
        name: "Dashboard",
        route: '/',
        icon: <AiOutlineDashboard />
    },
    {
        name: "Meetings",
        route: '/meetings',
        icon: <MeetIcon />
    },
    {
        name: "Teamnotes",
        route: '/notes',
        icon: <TeamNoes />
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