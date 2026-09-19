import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const customers = [
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
    },
    {
        name: "Floyd Miles",
        company: "Yahoo",
        phone: "(205) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive",
    },
    {
        name: "Ronald Richards",
        company: "Google",
        phone: "(302) 555-0107",
        email: "Harry@google.com",
        country: "Dubai",
        status: "Inactive",
    },
    {
        name: "Marvin McKinney",
        company: "Tesla",
        phone: "(252) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active",
    },
    {
        name: "Jerome Bell",
        company: "Google",
        phone: "(629) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active",
    },
    {
        name: "Kathryn Murphy",
        company: "Microsoft",
        phone: "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active",
    },
    {
        name: "Jacob Jones",
        company: "Yahoo",
        phone: "(208) 555-0112",
        email: "jacob@yahoo.com",
        country: "Brazil",
        status: "Active",
    },
    {
        name: "Kristin Watson",
        company: "Facebook",
        phone: "(704) 555-0127",
        email: "kristin@facebook.com",
        country: "Åland Islands",
        status: "Inactive",
    },
];

const CustomerTable = () => {
    return (
        <section className="customer-section">

            {/* Table Header */}
            <div className="table-header">

                <div>
                    <h2>All Customers</h2>
                    <p>Active Members</p>
                </div>

                <div className="table-actions">

                    <div className="table-search">
                        <HiOutlineMagnifyingGlass />

                        <input
                            type="text"
                            placeholder="Search"
                        />
                    </div>

                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>

                </div>

            </div>

            {/* Table */}
            <div className="table-wrapper">

                <table>

                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Company</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {customers.map((customer, index) => (
                            <tr key={index}>

                                <td>{customer.name}</td>
                                <td>{customer.company}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.country}</td>

                                <td>
                                    <span
                                        className={`status ${customer.status === "Active"
                                            ? "active-status"
                                            : "inactive-status"
                                            }`}
                                    >
                                        {customer.status}
                                    </span>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* Bottom */}
            <div className="table-bottom">

                <p>
                    Showing data 1 to 8 of 256K entries
                </p>

                <div className="pagination">
                    <button>‹</button>
                    <button className="current">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>...</button>
                    <button>40</button>
                    <button>›</button>
                </div>

            </div>

        </section>
    );
};

export default CustomerTable;