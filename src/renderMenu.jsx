import React from "react"
// eslint-disable-next-line import/no-cycle
import SubMenu from "./renderSub"

const RenderSideBar = (list) => {

    return (
        list.map(
            node => {
                if (node.child && node.child.length > 0) {
                    return <SubMenu node={node} key={node.id} />
                }
                return <div key={node.id}> {node.title}</div>
            }
        )
    )

}
export default RenderSideBar