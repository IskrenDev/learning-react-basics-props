import ListItemHome from "./ListItemHome.tsx";
import ListItemDropdown from "./ListItemDropdown.tsx";

function MainNavBar() {
    return (
        <nav id="nav-main">
            <ul>
                <ListItemHome />
                <ListItemDropdown content="Archives" />
                <ListItemDropdown content="Single Posts" />
                <ListItemDropdown content="Pages" />
            </ul>
        </nav>
    )
}

export default MainNavBar;