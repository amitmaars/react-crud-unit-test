import React, { useEffect, useState} from "react";
import FormComponent from '../form/form.component';
import { useSelector, useDispatch } from "react-redux";
import {getByUserId} from '../../actions/user.action';
import { useParams } from 'react-router-dom';

const Update = (props) =>{
    // const [activeUser, setActiveUser] = useState(null);
    const dispatch = useDispatch();
    let {id} = useParams(); //props.match.params.id;
    console.log("update", id);
    
    dispatch(getByUserId(id));
    const {user} = useSelector(state => state.userReducer);
    console.log("update 3", user );
    
    
    // useEffect(()=>{
    //     dispatch(getByUserId(paramUserId));
    // },[paramUserId])

    

    const getdata = (data) => {
        console.log("getData", data);
    }

    

    return (
        
        <FormComponent handleSubmitInParent={ getdata } preloadData={user} type="Update"/>

    )
}

export default Update;