import {
    HiOutlineSquares2X2,
    HiOutlineCube,
    HiOutlineUsers,
    HiOutlineBanknotes,
    HiOutlineMegaphone,
    HiOutlineQuestionMarkCircle,
    HiOutlineChevronRight,
} from "react-icons/hi2";

const Sidebar = () => {
    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="logo">
                <div className="logo-icon">
                    ◇
                </div>

                <h2>
                    Dashboard
                    <span>.01</span>
                </h2>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">

                <a href="#">
                    <HiOutlineSquares2X2 />
                    <span>Dashboard</span>
                </a>

                <a href="#">
                    <HiOutlineCube />
                    <span>Product</span>
                    <HiOutlineChevronRight className="nav-arrow" />
                </a>

                <a href="#" className="active">
                    <HiOutlineUsers />
                    <span>Customers</span>
                    <HiOutlineChevronRight className="nav-arrow" />
                </a>

                <a href="#">
                    <HiOutlineBanknotes />
                    <span>Income</span>
                    <HiOutlineChevronRight className="nav-arrow" />
                </a>

                <a href="#">
                    <HiOutlineMegaphone />
                    <span>Promote</span>
                    <HiOutlineChevronRight className="nav-arrow" />
                </a>

                <a href="#">
                    <HiOutlineQuestionMarkCircle />
                    <span>Help</span>
                    <HiOutlineChevronRight className="nav-arrow" />
                </a>

            </nav>

            {/* Upgrade Card */}
            <div className="upgrade-card">
                <p>Upgrade to PRO to get access all Features!</p>

                <button>
                    Get Pro Now
                </button>
            </div>

            {/* Profile */}
            <div className="profile">
                <div className="profile-image">
                    EA
                </div>

                <div>
                    <h4>Evano</h4>
                    <p>Project Manager</p>
                </div>

                <span>⌄</span>
            </div>

        </aside>
    );
};

export default Sidebar;