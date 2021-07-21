import { GithubIcon, AiOutlineDashboard, MeetIcon, TeamNoes } from "../assets/icons";

const GITHUB_LINK = process.env.REACT_APP_GITHUB_LINK

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
        link: `${GITHUB_LINK}`,
        icon: <GithubIcon />
    },
]
export default SidebarItemsMain;