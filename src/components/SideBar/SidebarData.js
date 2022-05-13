import React from 'react'

import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as FaIcons from 'react-icons/fa'

export const SideBarData=[

    {
        title:'Planets',
        path:'/',
        icon: <RiIcons.RiSunFill/>,
        cName:'nav-text'
    },
    {
        title:'Dwarf Planets',
        path:'/dwarf',
        icon: <GiIcons.GiDwarfFace/>,
        cName:'nav-text'
    },
    {
        title:'Mars Rover Reports',
        path:'/marsweather',
        icon:<FaIcons.FaMars/>,
        cName:'nav-text'
    },
    {
        title:'Saturn Moons',
        path:'/saturnmoons',
        icon: <GiIcons.GiRingedPlanet/>,
        cName:'nav-text'
    },
  
]