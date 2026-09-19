import {
    HiOutlineUsers,
    HiOutlineUser,
    HiOutlineComputerDesktop,
} from "react-icons/hi2";

const Stats = () => {
    return (
        <section className="stats">

            {/* Card 1 */}
            <div className="stat-card">

                <div className="stat-icon green">
                    <HiOutlineUsers />
                </div>

                <div>
                    <p>Total Customers</p>
                    <h2>5,423</h2>

                    <small className="increase">
                        ↑ 16% this month
                    </small>
                </div>

            </div>

            {/* Card 2 */}
            <div className="stat-card">

                <div className="stat-icon green">
                    <HiOutlineUser />
                </div>

                <div>
                    <p>Members</p>
                    <h2>1,893</h2>

                    <small className="decrease">
                        ↓ 1% this month
                    </small>
                </div>

            </div>

            {/* Card 3 */}
            <div className="stat-card">

                <div className="stat-icon green">
                    <HiOutlineComputerDesktop />
                </div>

                <div>
                    <p>Active Now</p>
                    <h2>189</h2>

                    <small>
                        👨🏻 👩🏻 👨🏻 👩🏻
                    </small>
                </div>

            </div>

        </section>
    );
};

export default Stats;