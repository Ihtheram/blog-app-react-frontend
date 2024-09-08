import { IUser } from '../../models/IUser'
import thumbnail from "../../assets/images/avatar-159236_640.png";
import { Link } from 'react-router-dom';

function User(props: IUser) {

    return (
        <>
            <div className="card mb-3 mx-3 px-3 border-2 rounded-pill" style={{ width: '500px' }}>
                <div className="row g-0 align-items-center" style={{ width: '500px' }}>
                    <div className="col-md-4"  style={{ width: '150px' }}>
                        <img src={thumbnail} className="img-fluid rounded-circle start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ width: '100%' }}>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.role}</p>
                            <p className="card-text"><small className="text-body-secondary">{props.institute}</small></p>
                            <Link className="fs-6 p-2 border border-secondary border-2 rounded-pill icon-link text-decoration-none text-secondary" to={{ pathname: `/befriend/${props.id}` }}>Befriend</Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default User