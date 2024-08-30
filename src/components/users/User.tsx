import { IUser } from '../../models/IUser'
import thumbnail from "../../assets/images/avatar-159236_640.png";
import { Link } from 'react-router-dom';

function User(props: IUser) {

    return (
        <>
            <div className='container py-3 my-2 bg-light-subtle border-2 rounded-pill d-inline-flex align-items-center'>

                <img src={thumbnail} className="float-start img-fluid rounded-circle" style={{ height: "100px" }} alt=""></img>
                <div className='container'>
                    <h4 className='fw-bold'>{props.name}</h4>
                    <h5 className="fs-6 fw-bold">{props.role}</h5>
                    <h6 className="fs-6">{props.institute}</h6>
                </div>
                <Link className="float-end fs-6 py-4 px-2 border border-secondary border-2 rounded-3 rounded-end-circle icon-link text-decoration-none text-secondary" to={{ pathname: `/befriend/${props.id}` }}>Befriend</Link>    
            </div>
        </>
    )
}

export default User