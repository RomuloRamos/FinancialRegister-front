import React, { useEffect, useState } from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import { useAppDispatch, useAppSelector } from './apis/redux/store/hooks';
import {userFetch, User} from '@/apis/redux/reducers/userSlice';
import { RootState } from './apis/redux/store/store';

function App() {
  const user = useAppSelector((state)=>{state.user})
  const dispatch = useAppDispatch();
  useEffect(()=>{
    console.log('useEffect runned')
    dispatch(userFetch())
  },[])
  return (
    <div>
      <h1 className='text-5xl'> Hello Twurma!</h1>
      <h2>User Data: </h2>
      {user.loading && <div>Loading...</div>}
    </div>
  )
}

export default App
