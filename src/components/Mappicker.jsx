import React, { Fragment, useState } from 'react';
import MapPicker from 'react-google-map-picker';




const Mappicker = () => {

    const [defaultLocationLat, setDefaultLocationLat] = useState(10);
    const [defaultLocationLng, setDefaultLocationLng] = useState(106);
    const DefaultLocation = { lat: defaultLocationLat, lng: defaultLocationLng };
    const [defaultLoc, setdefaultLoc] = useState(DefaultLocation);
    const [location, setLocation] = useState(DefaultLocation);

    function handleChangeLocation(event,lat, lng) {
        event.preventDefault();
        setLocation({ lat: lat, lng: lng });
     alert(location.lat);
    alert(location.lng);
    }



    // function handleResetLocation() {
    //     setdefaultLoc({ ...DefaultLocation });

    // }



    // const [locationLat, setlocationLat] = useState(defaultLocationLat);
    // const [locationLng, setlocationLng] = useState(defaultLocationLng);
    // const location = { lat: defaultLocationLat, lng: defaultLocationLng };
    // function handleChangeLocation() {
    //     setlocationLat(locationLat);
    //     setlocationLng(locationLng);
    // }
    // function handleResetLocation() {
    //     setDefaultLocationLat(defaultLocationLat);
    //     setDefaultLocationLng(defaultLocationLng);

    // }

    return (
        <Fragment>
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-4 m-auto">
                        <form  >
                            <div className="form-group">
                                <textarea className="form-control" name="lat" id="lat" required
                                    type='text' value={location.lat} placeholder='latitute'
                                    onChange={(e) => {
                                        setLocation({...location, lat:e.target.value });
                                    }}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="lng" id="lng" required
                                    type='text' value={location.lng} placeholder='longitute'
                                    onChange={(e) => {
                                        setLocation({...location, lng:e.target.value });
                                    }}
                                >
                                </textarea>
                            </div>
                            {/* <div className="form-group">
                                <input type='text' value={zoom} disabled />
                                </div> */}
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-success btn-block" onClick={handleChangeLocation} > ریست   </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 ">
                        <MapPicker defaultLocation={location}
                            // zoom={zoom}
                            style={{ height: '700px' }}
                            onChangeLocation={handleChangeLocation}
                            // onChangeZoom={handleChangeZoom}
                            apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
                    </div>
                </div>
            </div>
        </Fragment>



    );
}

export default Mappicker;