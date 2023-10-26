import MainNavBar from "../navigation/mainNavbar/MainNavBar.tsx";
import MainTitle from "./MainTitle.tsx";
import FancyLine from "./FancyLine.tsx";

function Header() {
    return (
        <header>
            <MainNavBar />
            <MainTitle />
            <FancyLine />
        </header>
    )
}

export default Header;