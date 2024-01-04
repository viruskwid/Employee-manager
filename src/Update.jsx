import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

function Update() {
    const {id} = useParams()
    const users = useSelector((state)=>state.users)
    const existingUser = users.filter(f=>f.id==id)
    const {name , contact , desgn} = existingUser[0]
    const [upname,setName]= useState(name)
    const [upcontact,setContact]= useState(contact)
    const [updesgn,setDesgn]= useState(desgn)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleUpdate = (event)=>{
        event.preventDefault()
        dispatch(updateUser({
            id:id,
            name:upname,
            contact: upcontact,
            desgn:updesgn
        }))
        navigate('/')
        
    }
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div  className='w-50  text-dark p-5 shadow rounded'>
            <h4 className='text-center'>Update Employee Details</h4>
           <form onSubmit={handleUpdate}>
            <div className='mt-3'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Employee Name' value={upname} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className='mt-3'>
                <label htmlFor="contact">Contact No:</label>
                <input type="text" name='contact' className='form-control' placeholder='Enter Employee Contact' value={upcontact}  onChange={e=>setContact(e.target.value)}/>
            </div>
            <div className='mt-3'>
                <label htmlFor="designation">Designation:</label>
              <select name='designation' className="form-control" value={updesgn} onChange={e=>setDesgn(e.target.value)}>
                 <option>Software Architect</option>
                 <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Odoo Developer</option>
                <option>Software Test Engineer</option>
                 <option>Dot Net Developer</option>
                <option>Quality Analyst</option>
                <option>ReactJS Developer</option>
                </select>
            </div>
            <button className='btn btn-warning mt-4'>Update</button>
           </form>
        </div>

    </div>
    </div>
  )
}

export default Update