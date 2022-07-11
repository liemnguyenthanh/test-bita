import React from 'react';
import RenderSideBar from './renderMenu';

const DATA_SIDEBAR = [
    {
        id: '0-0',
        title: 'Item parent',
        child: [
            {
                id: '0-0-0',
                title: 'Item child',
            },
            {
                id: '0-0-1',
                title: 'Item child',
            },
        ]
    },
    {
        id: '0-1',
        title: 'Item parent',
        child: [
            {
                id: '0-1-0',
                title: 'Item child',
            },
            {
                id: '0-1-1',
                title: 'Item child',
            },
        ]
    }
]


const SideBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const {isToggleSidebar} = props
    return (
        <div className={`sidebar ${isToggleSidebar ? 'active' : ''}`}>
            {RenderSideBar(DATA_SIDEBAR)}
        </div>
    )
}

export default SideBar