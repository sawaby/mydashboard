"use client";
import {
    MdDashboardCustomize,
    MdReport,
    MdTask,
    MdStackedBarChart,
    MdViewKanban,
} from "react-icons/md";

export const routes = [
    {
        name: "Dashboard",
        layout: "/dashboard",
        icon: <MdDashboardCustomize className="h-6 w-6" />
    },

    {
        name: "Reports",
        layout: "/reports",
        icon: <MdReport className="h-6 w-6" />
    },

    {
        name: "Tasks",
        layout: "/tasks",
        icon: <MdTask className="h-6 w-6" />
    },

    {
        name: "Kanban",
        layout: "/kanban",
        icon: <MdViewKanban className="h-6 w-6" />
    },

    {
        name: "Charts",
        layout: "/charts",
        icon: <MdStackedBarChart className="h-6 w-6" />
    },
];