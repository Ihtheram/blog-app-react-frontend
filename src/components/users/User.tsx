import { IUser } from '../../models/IUser'
import thumbnail from "../../assets/images/avatar-159236_640.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function User(props: IUser) {

    const friends_endpoint = 'http://localhost:8080/users/allies/';

    enum status {
        Allied = "Allied",
        Offered = "Offered",
        NotAllied = "Not Allied"
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
                <div className="card mb-3 mx-3 px-3 border-2 rounded-pill" style={{ width: '500px' }}>
                    <div className="row g-0 align-items-center" style={{ width: '500px' }}>
                        <div className="col-md-4" style={{ width: '150px' }}>
                            <img src={thumbnail} className="img-fluid rounded-circle start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{ width: '100%' }}>
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text">{props.role}</p>
                                <p className="card-text"><small className="text-body-secondary">{props.institute}</small></p>
                                <button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-4 py-2 my-3 button-submit" onClick={toggleFriend}>
                                    {alliance_status == status.NotAllied? 'Ally' : alliance_status == status.Offered? "Cancel Offer" : "Revoke Alliance"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default User