/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { createID } from './helper';
import Task from './Task';

const DATA_TASK = [
    {
        id: '38127391232',
        title: 'Ticket 1',
        child: [
            {
                id: '12323',
                title: 'Item 1',
                isDone: true
            },
            {
                id: '42123213',
                title: 'Item 2',
                isDone: false
            },
        ]
    },

]
const Mainpage = () => {
    const [inputCreate, setInputCreate] = useState('')
    const [taskList, setTaskList] = useState(DATA_TASK)
    const handleCreateTask = () => {
        if(inputCreate ==='') return
        const newItem = {
            id: createID(),
            title: inputCreate,
            child: []
        }
        setInputCreate('')
        setTaskList([...taskList, newItem])
    }
    const updateList = (type, taskId, item) => {
        const newList = taskList.map(task => {
            if (task.id === taskId) {
                if (type === 'create') {
                    // eslint-disable-next-line no-param-reassign
                    task.child = [...task.child, item]
                }
                if (type === 'check') {
                    task.child.map(
                        childTask => {
                            if (childTask.id === item.id) {
                                // eslint-disable-next-line no-param-reassign
                                childTask.isDone = !childTask.isDone
                            }
                            return childTask
                        }
                    )
                }
                if (type === 'remove') {
                    if (task.id === taskId) {
                        // eslint-disable-next-line no-param-reassign
                        task.child = task.child.filter(childTask => childTask.id !== item.id)
                    }
                }

            }
            return task
        })
        setTaskList(newList)
    }
    return (
        <div className='mainpage'>
            <div className='mainpage-header'>
                <h2>Dashboard</h2>
                <div className="mainpage-create">
                    <input placeholder='New list' value={inputCreate} onChange={(e) => setInputCreate(e.target.value)} />
                    <button onClick={() => handleCreateTask()} >Create</button>
                </div>
            </div>
            <div className="mainpage-body">
                {
                    taskList.map(task => <Task key={task.id} task={task} updateList={updateList} />)
                }
            </div>
        </div>
    )
}

export default Mainpage