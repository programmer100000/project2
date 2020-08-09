import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Mappicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 }],
            store: '',
        };
    }
    addLocation = (event) => {
        event.preventDefault();
        const stores = [...this.state.stores];
        const store = {
            lat: this.state.lat,
            lng: this.state.lng,
        };
        stores.push(store);
        console.log(stores);
        this.setState({ stores });
    };
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: store.lat,
                        lng: store.lng,
                    }}
                    onClick={() => console.log('You clicked me!')}
                />
            );
        });
    };

    render() {
        return (
            <Fragment>
                <div className='row w-100 p-4' style={{ height: '500px' }}>
                    <div className='col-md-4 '>
                        <form>
                            <div className='form-group'>
                                <textarea
                                    className='form-control'
                                    name='lat'
                                    id='lat'
                                    required
                                    type='text'
                                    value={this.state.lat}
                                    placeholder='latitute'
                                    onChange={(e) => {
                                        this.setState({
                                            lat: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <div className='form-group'>
                                <textarea
                                    className='form-control'
                                    name='lng'
                                    id='lng'
                                    required
                                    type='text'
                                    value={this.state.lng}
                                    placeholder='longitute'
                                    onChange={(e) => {
                                        this.setState({
                                            lng: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <div className='form-group mb-0 text-center'>
                                <button
                                    className='btn btn-success btn-block'
                                    onClick={this.addLocation}
                                >
                                    {' '}
                                    ثبت{' '}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <Map
                            google={this.props.google}
                            zoom={8}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                        >
                            {this.displayMarkers()}
                        </Map>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: 'TOKEN HERE'
})(Mappicker);
