import { IUser } from '../../models/IUser'
import thumbnail from "../../assets/images/avatar-159236_640.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function User(props: IUser) {

    const friends_endpoint = 'http://localhost:8080/users/allies/';

    enum status {
        Allied = "Allied", // unfriend
        Offered = "Offered", // revoke
        NotAllied = "Not Allied", // Invite
        Received = "Received" // Befriend Reject 
    }
    const [alliance_status, setAllianceStatus] = useState<status>(status.NotAllied);


    const navigate = useNavigate();

    const toggleFriend = async () => {
        if (!localStorage.getItem('user')) {
            console.log("Not logged in!");
            navigate('/login');
        }
        else {
            return axios.post(
                friends_endpoint + props.id, {}
            ).then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    setAllianceStatus(status.Offered);
                } else {
                    console.log("Error submitting request!");
                }
            })
        }
    };

    return (
        <>
            <div id='person-card' className="card row g-0 align-items-center border-2 rounded-pill person-card">

                <div id='person-card-image' className="col-md-4">
                    <img src={thumbnail} className="img-fluid rounded-circle start" alt="..." />
                </div>

                <div id='person-card-body' className="col-md-8 card-body d-flex flex-column h-100">
                    
                    <div className='flex-column h-75 align-items-center'>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text mb-0">{props.role}</p>
                        <small className="text-body-secondary">{props.institute}</small>
                    </div>
                    <div className='d-flex h-25 align-items-end'>
                        {alliance_status === status.NotAllied || alliance_status === status.Received ?
                            <button className="btn icon-link fs-6 border border-secondary border-1 rounded-pill px-2 py-1 me-1 button-submit" onClick={toggleFriend}>
                                {alliance_status === status.NotAllied ? 'Invite' : alliance_status === status.Received ? "Befriend" : ""}</button> : ''}
                        {alliance_status === status.NotAllied ? ''
                            : <button className='btn icon-link fs-6 border border-secondary border-1 rounded-pill px-2 py-1 button-risky' onClick={toggleFriend}>
                                {alliance_status === status.Allied ? 'Unfriend' : alliance_status === status.Offered ? "Revoke" : alliance_status === status.Received ? "Reject" : ""}</button>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default User