import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
        { name: "간병인", path: "/caregiver", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", hasDropdown: true },
        { name: "보호자", path: "/careTaker/list", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", hasDropdown: true },
        { name: "QNA", path: "/qna/list", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" },
        { name: "FAQ", path: "/faq", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" }
    ];

    const handleDropdownToggle = (menuName) => {
        setActiveDropdown(prevState => (prevState === menuName ? null : menuName));
    };

    return (
        <div>
            <aside className={`z-20 ${sidebarOpen ? 'block' : 'hidden'} w-64 overflow-y-auto bg-white md:block flex-shrink-0`}>
                <div className="py-4 text-gray-500">
                    <Link className="ml-6 text-lg font-bold text-gray-800 flex items-center" to="/">
                        <img src="/logo.png" alt="Logo" className="mr-2 h-8"/>
                        CareBridge
                    </Link>
                    <ul className="mt-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative px-6 py-3">
                                {location.pathname === item.path && (
                                    <span className="absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                                )}
                                <div
                                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.name) : null}
                                    className="cursor-pointer"
                                >
                                    <Link
                                        className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
                                            location.pathname === item.path ? 'text-green-600' : 'text-gray-800 hover:text-green-600'
                                        }`}
                                        to={item.path}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d={item.icon}></path>
                                        </svg>
                                        <span className="ml-4">{item.name}</span>
                                        {item.hasDropdown && (
                                            <svg
                                                className={`ml-auto w-4 h-4 transition-transform transform ${
                                                    activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        )}
                                    </Link>
                                </div>
                                {item.hasDropdown && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeDropdown === item.name ? 'max-h-40' : 'max-h-0'
                                        }`}
                                    >
                                        <ul className="pl-10 mt-2 space-y-2">
                                            <li>
                                                <Link to={`${item.path}/subitem1`} className="text-gray-700 hover:text-green-600">Subitem 1</Link>
                                            </li>
                                            <li>
                                                <Link to={`${item.path}/subitem2`} className="text-gray-700 hover:text-green-600">Subitem 2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;