import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
    return (
        <header className="header">

            <h1>
                Hello Evano 👋
            </h1>

            <div className="header-search">
                <HiOutlineMagnifyingGlass />

                <input
                    type="text"
                    placeholder="Search"
                />
            </div>

        </header>
    );
};

export default Header;