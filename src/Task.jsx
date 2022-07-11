/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createID } from './helper';

const Task = (props) => {
    // eslint-disable-next-line react/prop-types
    const { task, updateList } = props
    const [createItem, setCreateItem] = useState('')
    const [isCreateItem, setIsCreateItem] = useState(false)
    const createNewItem = () => {
        setIsCreateItem(!isCreateItem)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newItem = {
                id: createID(),
                title: createItem,
                isDone : false
            }
            updateList('create', task.id, newItem)
            setCreateItem('')
            setIsCreateItem(false)
        }
      }
    return (
        <div className='task'>
            <div className="task-title">
                {task.title}
                <i className="fas fa-plus" onClick={() => createNewItem()} />
            </div>
            <div className="task-wrap">
                {
                    isCreateItem&&
                    <input  
                        className='task-wrap--input'
                        placeholder='New item' 
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setCreateItem(e.target.value)} />
                }
                {
                    task.child.length > 0 &&
                    task.child.map(
                        item =>
                            <div className={`task-item ${item.isDone ? 'done' : ''}`} key={item.id}>
                                <div className="">
                                    <input type="checkbox" checked={item.isDone} onChange={() => updateList('check', task.id, item)}></input>
                                    <span>{item.title}</span>
                                </div>
                                <i className="fas fa-times task-item--btn" onClick={() => updateList('remove', task.id, item)} />
                            </div>
                    )
                }
            </div>

        </div>
    )
}

export default Task