import React from 'react'
import "../../Styles/style.css";
import Big from '../../images/bioaidlogo.svg'
import { Link } from 'react-router-dom'

const user = JSON.parse(localStorage.getItem('User'))
// const userData = user.json.parse()

// console.log(user)

function Account() {

    if (user) {
        return (
            <div className='acct-store'>
                <img src={Big} className='logo-img' alt='big logo' />
                <div className="acct-context">
                    <div className="accnt">
                        <div className='title'>
                            <p>Name</p>
                            <p>Age</p>
                            <p>Email</p>
                            <p>Status</p>
                        </div>
                        <div className='user-ans'>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                            <p> {user.age}</p>
                            <p> {user.email}</p>
                            <p>waiting</p>
                        </div>
                    </div>
                    <Link to='/certificate' className='link-two certf'>
                        See Certificate
                </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='guest'>
                    <p className='guest-talk'>Please sign in to see account details</p>
                    <Link to="/signin" className="link">
                        Sign in
                </Link>
                </div>
            </div>
        )
    }
}

export default Account


   // <div className="accnt">
        //     <img src={Big} className='logo-img' />
        //     <div className="information" >
        //         {/* <p>Name : {user.firstName}</p> */}
        //         <p>Name : {`${user.firstName} ${user.lastName}`}</p>
        //         <p>Age : {user.age}</p>
        //         <p>Email : {user.email}</p>
        //         <p>Status : waiting </p>
        //     </div>
        // </div>