/*global kakao*/

import React, { Component } from 'react';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';
import HosInfoCard from '../HosInfoCard/HosInfoCard';
const cx = classNames.bind(styles)

const widthLength = 100;
class BigMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h_data: [],
            cur_pick: [],
        };
    }

    click_marker(map, marker, idx, that) {
        return function () {
            that.setState( {
                cur_pick: idx,
            },() => (console.log(that.state.cur_pick)));
        }
    }
    get_first() {
        this.state.h_data = this.props.hospitalData;
        this.state.cur_pick = this.props.hospitalData[0];
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e78c23fbd9656d2db2f5df69fb693cfb&autoload=false";
        document.head.appendChild(script);

        this.state.h_data = this.props.hospitalData;
        this.state.cur_pick = this.props.hospitalData[0];
        var position = [];

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');

                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(this.props.hospitalData[0].h_location[0], this.props.hospitalData[0].h_location[1]),
                    level: 3
                });
                var positions = [];
                for (var i = 0; i < this.props.hospitalData.length; i++) {
                    positions.push({
                        content: '<div> 깨깨오 </div>',
                        latlng: new kakao.maps.LatLng(this.props.hospitalData[i].h_location[0], this.props.hospitalData[i].h_location[1])
                    })
                }
                for (var i = 0; i < positions.length; i++) {
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: positions[i].latlng,
                        content: "aaaaaaaaa"
                    })
                    kakao.maps.event.addListener(marker, 'click', this.click_marker(map, marker, this.props.hospitalData[i], this));
                }
            });
        };

    }

    render() {
        if(this.state.cur_pick.length < 1) {
            this.get_first();
        }
        return (
            <>
                <div className={cx('map')} id="map">
                </div>
                
                <div>
                    <HosInfoCard
                        hospitalData={this.state.cur_pick}
                        widthLength={widthLength}
                    />
                </div>
            </>
        );


    }
}

export default BigMap;