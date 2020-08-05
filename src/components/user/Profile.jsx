import React, { Fragment, useState, useRef, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const Profile = () => {
    const [getLname, setLname] = useState('');
    const [getFname, setFname] = useState('');
    const [getMobilenumber, setMobilenumber] = useState('');
    const [getUsersInfo, setUsersInfo] = useState([]);
    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: 'پر کردن این فیلد الزامی میباشد',
                min: 'کمتر از 5 کاراکتر نباید باشد',
            },
            element: (message) => <div className="text-right" style={{ color: 'red' }}>{message}</div>,
        })
    );
    let users = [];
    const handleSubmit = (event) => {
        event.preventDefault();
        let user = [getFname, getLname, getMobilenumber];
        let flag = false;
        let usersInfoObj = '';
        if (localStorage.usersInfo) {
            usersInfoObj = JSON.parse(localStorage.usersInfo);
            for (let index = 0; index < usersInfoObj.length; index++) {
                let element = usersInfoObj[index];
                if (element[2] === user[2]) {
                    flag = true;
                }
            }
        }
        if (!flag) {
            users = [];
            if (localStorage.usersInfo) {
                users = JSON.parse(localStorage.usersInfo);
            }
            users.push(user);
            localStorage.setItem('usersInfo', JSON.stringify(users));
        }
        if (localStorage.usersInfo) {
            let usersInfo = JSON.parse(localStorage.usersInfo);
            setUsersInfo(usersInfo);
        }
    };
    useEffect(() => {
        if (localStorage.usersInfo) {
            let usersInfo = JSON.parse(localStorage.usersInfo);
            setUsersInfo(usersInfo);
        }
    }, []);
  
    return (
        <Fragment>
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-6">
                        <form  >
                            <div className="form-group">
                                <input className="form-control" name="fname" value={getFname} type="text" id="fname" placeholder="نام" required
                                    onChange={(e) => {
                                        setFname(e.target.value);
                                        validator.current.showMessageFor(
                                            'fname'
                                        );
                                    }}
                                />
                                {validator.current.message(
                                    'fname',
                                    getFname,
                                    'required'
                                )}
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="lname" type="text" id="lname" placeholder="نام خانوادگی" required
                                    onChange={(e) => {
                                        setLname(e.target.value);
                                        validator.current.showMessageFor(
                                            'lname'
                                        );
                                    }}
                                />
                                {validator.current.message(
                                    'lname',
                                    getLname,
                                    'required'
                                )}
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="mobile" value={getMobilenumber} type="text" pattern="09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}" id="mobile" placeholder="موبایل" required
                                    onChange={(e) => {
                                        setMobilenumber(e.target.value);

                                        validator.current.showMessageFor(
                                            'mobile'
                                        );
                                    }}
                                />
                                {validator.current.message(
                                    'mobile',
                                    getMobilenumber,
                                    'required'
                                )}
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-success btn-block"  onClick={handleSubmit} > ثبت  </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">نام</th>
                                    <th className="text-center">نام خانوادگی</th>
                                    <th className="text-center">شماره موبایل</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getUsersInfo.map((row) => (
                                    <tr key={row[2]}>
                                        <td>{row[0]}</td>
                                        <td>{row[1]}</td>
                                        <td>{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Profile;