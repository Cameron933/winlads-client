import React from 'react'
import { useNavigate } from 'react-router-dom';

const SubDone = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  

  const handleButton = () => (
    navigate("/login")
  )

  return (
    <div className='bg-black p-4 '>
      <button className='text-white text-xl' onClick={handleButton}>
        done
      </button>
    </div>
  )
}

export default SubDone