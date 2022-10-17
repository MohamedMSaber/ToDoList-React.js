import React from 'react'

export default function AddTask({newTask ,getTask , addTask}) {
    return (

        <div>
            <>
                {/* addTask */}
                <form onSubmit={addTask}>
                    <div className='row mb-3'>
                        <div className='col'>
                            <input
                                value={newTask}
                                onChange={getTask}
                                className='form-control form-control-lg'></input>
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-lg btn-success'>ADD Task</button>
                        </div>
                    </div>
                </form>
            </>
        </div>
    )

}
