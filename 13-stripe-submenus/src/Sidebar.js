import React from 'react';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    return (
        <div className={`${isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
            <aside className='sidebar'>
                <button className='close-btn' onclick={closeSidebar}>
                    <FaTimes/>
                </button>
                <div className='sidebar-links'>
                        {sublinks.map((index,item)=> {
                            const {links,page} = item;
                            return (
                                <article key={index}>
                                    <h4>{page}</h4>
                                    <div className='sidebar-sublinks'>
                                        {links.map((item,index) => {
                                            const {url,icon,label} = link;
                                            return (
                                                <a href={url} key={index}>{icon}{label}</a>
                                            )
                                        })}
                                    </div>
                                </article>
                            )
                        })}
                </div> 
            </aside>
        </div>
    )
}

export default Sidebar;
