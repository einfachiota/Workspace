
export function openNav() {
    document.getElementById("mySidebar").style.width = "var(--sidebar-width)";
    document.getElementById("topbar").style.marginLeft = "var(--sidebar-width)";
}

export function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("topbar").style.marginLeft = "0";
}