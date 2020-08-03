import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    // let user = useSelector((state) => state.user);
    // let nam = user.name;
    // const handleAdd = () => {
      
    //     localStorage.setItem('fname', nam);
    // };
    return (
        <Fragment>
            {/* {user.map((user) => (
                <div
                    key={user.id}
                >
                    <img
                        src={user.imageUrl}
                        alt=""
                    />
                    <span>نام: {user.name} </span>
                    <span>نام خانوادگی: {user.lastname} </span>
                    <button onClick={handleAdd} className="btn btn-primary" >افزودن به سبد خرید</button>
                </div>
            ))} */}
            
        </Fragment>
    );
};

export default Profile;