import { useSelector } from 'react-redux';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
  let navigte = useNavigate()
  const {  isAuthenticated } = useSelector(
    (state) => state.user
  );
  if(isAuthenticated=== false){
    navigte("/login")
  }
    return(
     <>
     </>
    )
}

export default ProtectedRoute