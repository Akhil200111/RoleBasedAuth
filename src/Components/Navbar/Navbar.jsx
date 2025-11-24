import React, { useState } from 'react';
import './Navbar.scss'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const Navbar = () => {

    const [dropDown, setDropDown] = useState(false);
    const [showSidebar, setSidebar] = useState(false);


    const toggleBar =() => {
        setSidebar(!showSidebar);
    }

  return (
    <div className='Navbar'>
        <div className="logo">
            <img src='' alt="Fabricantz-logo" />
        </div>
        <div className="navlinks">
            <Link to='/' className='link'> <span>Home</span></Link>
            <Link to='/about'className='link'> <span>About Us</span></Link>
            <div 
                 className='dropdown'
                 onMouseEnter={() => setDropDown(true)}
                 onMouseLeave={() => setDropDown(false)}
            >
                <span>Services</span><sub><TiArrowSortedDown /> </sub>
             <AnimatePresence>
                 {dropDown && (
                    <motion.div className='dropdown-menu'
                           initial={{opacity:0, y:-100}}
                           animate={{opacity:1, y: 0}}
                           exit={{opacity: 0, y: -100}}
                           transition={{duration: .6}}
                    >
                        <span>Windwos</span>
                        <span>Doors</span>
                        <span>Handrails</span>
                        <span>Partitions</span>
                    </motion.div>
                )}
             </AnimatePresence>
 
            </div>
            <span>Projects<sub><TiArrowSortedDown /> </sub></span>
            <Link to='/contact' className='link'><span>Contact Us</span></Link>
        </div>

        <div className="auth">
            <FaRegCircleUser />
        </div>

        <div className="hamburger" onClick={toggleBar}>
             <FaBars className="bar-icon"/>
        </div>

        {showSidebar && <motion.div className='toggleNev'
                initial={{opacity:0, x:100}}
                animate = {{opacity:1, x:0}}
                exit={{opacity:0, x: 100}}
                transition={{duration:.5}}
        >
            <span>Home</span>
            <span>About Us</span>
            <div className="dropdown"
             onMouseEnter={() => setDropDown(true)}
             onMouseLeave={() => setDropDown(false)}
            >
                <span>Services<sub><IoIosArrowDown /></sub></span>

                {dropDown && (
                    <div className="toggle-dropdown-menu">
                        <span>Windows</span>
                        <span>Doors</span>
                        <span>Handrails</span>
                        <span>Partitions</span>
                    </div>
                )}
            </div>

            </motion.div>}
      
    </div>
  );
}

export default Navbar;
