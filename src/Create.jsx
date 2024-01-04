import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create () {
    const [name,setName]= useState('')
    const [contact,setContact]= useState('')
    const [desgn,setDesgn]= useState('')
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1 , name , contact ,desgn}))
        navigate('/')
    }
    console.log(users);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div  className='w-50  text-dark p-5 shadow rounded'>
            <h4 className='text-center'>Add Employee Details</h4>
           <form onSubmit={handleSubmit}>
            <div className='mt-3'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Employee Name' onChange={e=>setName(e.target.value)}/>
            </div>
            <div className='mt-3'>
                <label htmlFor="contact">Contact No:</label>
                <input type="text" name='contact' className='form-control' placeholder='Enter Employee Contact' onChange={e=>setContact(e.target.value)} />
            </div>
            <div className='mt-3'>
                <label htmlFor="designation">Designation:</label>
              <select name='designation' className="form-control"  onChange={e=>setDesgn(e.target.value)}>
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
            <button className='btn btn-warning mt-4'>Create</button>
           </form>
        </div>

    </div>
  )
}

export default Create
