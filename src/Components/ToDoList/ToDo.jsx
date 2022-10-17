import React from 'react'

export default function ({ todo, markDone, deleteTask, setUpdateData }) {
    return (
        <div>
            {
                todo && todo
                    .sort((a, b) => a.id > b.id ? 1 : -1)
                    .map((task, index) => {
                        return (

                            <React.Fragment key={task.id}>
                                <div className='col taskBg'>
                                    <div className={task.status ? 'done' : ''}>
                                        <span className='taskNumber '>{index + 1}</span>
                                        <span className='taskText'>{task.title}</span>
                                    </div>
                                    <div className='iconsWarp'>
                                        <span title='Compeleted  / Not Completed'>
                                            <i onClick={(e) => { markDone(task.id) }} className='fa fa-circle-check'></i>
                                        </span>

                                        {task.status ? '' : (<span title='Edit'>
                                            <i className='fa fa-pencil' onClick={(e) => { setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false }) }}></i>
                                        </span>)}

                                        <span title='Delete' onClick={() => { deleteTask(task.id) }}>
                                            <i class="fa-regular fa-trash-can"></i>
                                        </span>
                                    </div>
                                </div>

                            </React.Fragment>



                        )
                    })
            }
        </div>
    )
}
