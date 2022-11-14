import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'


const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
}
const UsersForm = ({getUsers, userSelected, deselectUser, selectUser}) => {

    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }else{
            reset(initialValues)
        }
    }, [userSelected])

    const submit = (data) => {
        console.log(data)
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
                .catch(error => console.log(error.response?.data))
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
                .catch(error => console.log(error.response?.data))
                reset(initialValues)
        }
    }

    return (
        <form 
            className='users-form' 
            onSubmit={handleSubmit(submit)}>
            <h1>New User</h1>
            <div className='input-container'>
            <i class="fa-solid fa-user-large"></i><input className='short' {...register("first_name")} type="text" placeholder='First Name' /> <input className='short' {...register("last_name")} type="text" placeholder='Last Name'/>
            </div>
            <div className="input-container">
            <i class="fa-solid fa-envelope"></i><input className='large' {...register("email")} type="text" placeholder='Email'/>
            </div>
            <div className="input-container">
            <i class="fa-solid fa-lock"></i><input className='large' {...register("password")} type="text" placeholder='Password'/>
            </div>
            <div className="input-container">
            <i class="fa-solid fa-cake-candles"></i><input className='large' {...register("birthday")} type="date" placeholder='mm/dd/yyyy'/>
            </div >
            <div className='buttons'>
            <button className='button-form'>Upload</button>
            {
                userSelected && (
                    <button className='button-form' type="button" onClick={() => selectUser(null)}>
                        Cancel
                    </button>
                )
            }
            </div>
        </form>
    );
};

export default UsersForm;