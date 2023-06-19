import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const SidebarData = [

    {
        title: "Home Page",
        icon: <HomeIcon />,
        link: "/Home",

    }
    , {
        title: "Course Schedule",
        icon: <CalendarMonthIcon />,
        link:  "/CoursSchedule",
    }
     ,{
        title: "Registration",
        icon: <AppRegistrationIcon />,
        link: "/Registration",
    }
    , 

];
