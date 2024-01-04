import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
  const users = useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
   dispatch(deleteUser({id:id}))
  }
  return (
    <div className='container'>
      <h2 className='text-center mt-2'>Company Employe Details</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Designation</th>
      <th>Action</th>
    </tr>
  </thead>
  {
    users.length>0?<tbody>
    {
      users.map((user , index)=>(
        <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>+91{user.contact}</td>
        <td>{user.desgn}</td>
        <td>
          <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
          <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>

        </td>
        </tr>
      ))
    }
  </tbody> :
  <div style={{marginLeft:'260px'}} className='text-center d-flex flex-column'>
    <img className='text-center' style={{width:'75%',height:'350px'}} src="https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif" alt="" />
    <button className='btn btn-danger'>No user Found</button>
  </div>
  }
</table>
    </div>
  )
}

export default Home