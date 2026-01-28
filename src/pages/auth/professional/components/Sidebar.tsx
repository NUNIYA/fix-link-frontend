import { NavLink, useNavigate } from "react-router-dom";
import { useMockService } from "../../../../context/MockServiceContext";
import { useAuth } from "../../../../context/AuthContext";

const Sidebar: React.FC = () => {
    const { notifications } = useMockService();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const isProView = window.location.pathname.includes('/professional');
    const unreadMessagesCount = notifications.filter(n =>
        (n.userId === user?.id || n.userId === user?.name || isProView) && !n.isRead
    ).length; // Mock logic: show counts in Pro View for all notifications during dev phase

    return (
        <aside className="fixed z-20 h-full w-64 flex-col bg-primary p-4 text-white/80 hidden lg:flex">

            {/* LOGO */}
            <div className="flex items-center gap-3 p-2 mb-6 text-white">
                <div className="size-8">
                    {/* you can replace this svg later */}
                    <span className="material-symbols-outlined text-3xl">handyman</span>
                </div>
                <h1 className="text-lg font-bold tracking-tight">Fix-Link</h1>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-2 flex-1">

                {[
                    { to: "/professional/home", icon: "dashboard", label: "Dashboard" },
                    { to: "/professional/jobs", icon: "work", label: "Jobs" },
                    { to: "/professional/messages", icon: "chat", label: "Messages" },
                    { to: "/professional/earnings", icon: "payments", label: "Earnings" },
                    { to: "/professional/profile", icon: "person", label: "Profile" },
                    { to: "/professional/promote", icon: "rocket_launch", label: "Promote" },
                    { to: "/professional/notifications", icon: "notifications", label: "Notifications" },
                ].map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-4 p-3 rounded-lg transition
              ${isActive ? "bg-white/20 text-white" : "hover:bg-white/10 hover:text-white"}`
                        }
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {item.icon}
                        </span>
                        <p className="text-sm font-medium flex-1">{item.label}</p>
                        {item.label === "Messages" && unreadMessagesCount > 0 && (
                            <span className="flex size-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary">
                                {unreadMessagesCount}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* BOTTOM */}
            <div className="flex flex-col gap-2 mt-auto">
                <NavLink
                    to="/professional/settings"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white"
                >
                    <span className="material-symbols-outlined text-2xl">settings</span>
                    <p className="text-sm font-medium">Settings</p>
                </NavLink>

                <button
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white"
                >
                    <span className="material-symbols-outlined text-2xl">logout</span>
                    <p className="text-sm font-medium">Logout</p>
                </button>
            </div>

        </aside>
    );
};

export default Sidebar;
