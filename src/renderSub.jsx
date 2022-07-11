/* eslint-disable react/prop-types */
import React, { useState } from "react";
// eslint-disable-next-line import/no-cycle
import RenderSideBar from "./renderMenu";

const SubMenu = (props) => {
    const { node } = props
    const [collapse, setCollapse] = useState(false)
    const handleCollapse = () => {
        setCollapse(!collapse)
    }
    return (
        <React.Fragment key={node.id}>
            <div
                onClick={() => handleCollapse()}
                aria-hidden="true"
                className="sidebar-node"
            >
                {node.title}
                <i className={`fas fa-angle-up  ${collapse ? 'icon-active' : ''}`}></i>
            </div>
            {
                collapse &&
                <div className="sidebar-node--child">
                    {RenderSideBar(node.child)}
                </div>
            }
        </React.Fragment>
    )
}
export default SubMenu