import React from 'react'

export default function UpdateTask({updateData , updateTask ,changeTask , cancelUpdate}) {
    return (
        <div>
            <>
                {/* Update Task */}
                < div className='row mb-3'>
                    <div className='col'>
                        <input
                            value={updateData && updateData.title}
                            onChange={(e) => changeTask(e)}
                            className='form-control form-control-lg'>
                        </input>
                    </div>
                    <div className='col-auto'>
                        <button onClick={updateTask} className='btn btn-lg btn-success me-2'>Update</button>
                        <button onClick={cancelUpdate} className='btn btn-lg btn-warning'>Cancel</button>
                    </div>
                </div>
            </>
        </div>
    )
}
