// modules
import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

//Db
import Db from './Db/Map-coordinates.js'

// styles
import './Map-API.css';

// possible Ymaps API keys:
// 1) 08214da6e825bb8b4e37599b03c92015858b2316
// 2) 4abe14abc9b3e46c
// 3) 3Aa5ef8364e7502fbfcf8ea8ab9e7fada5c2752129afd88ddbd71a807f2dfe1378

const MapApi = ({ fromMainPage = false, branchCode = [7] }) => {

    const showAllBrances = Object.keys(Db).map((i) => {
        return (
            <Placemark
                key={Db[i].iconCaption}
                modules={['geoObject.addon.balloon']}
                geometry={Db[i].geometry}
                properties={{
                    iconContent: Db[i].iconContent,
                    iconCaption: Db[i].iconCaption,
                    balloonContentBody:Db[i].comment
                }}
                options={{
                    preset: Db[i].preset,
                    draggable: false,
                    iconCaptionMaxWidth: 120
                }} />
        )
    })

    const showOneBranch =
        <Placemark
            key={Db[Object.keys(Db)[branchCode]].iconCaption}
            modules={['geoObject.addon.balloon']}
            geometry={Db[Object.keys(Db)[branchCode]].geometry || [0, 0]}
            properties={{
                iconContent: Db[Object.keys(Db)[branchCode]].iconContent,
                iconCaption: Db[Object.keys(Db)[branchCode]].iconCaption,
                balloonContentHeader:'<a href="https://yandex.ru/">МКА Защита</a>',
                balloonContentBody:'Здесь располагается Головой Офис<br><img src="https://avatars.mds.yandex.net/get-altay/2838749/2a000001734cd3aca10546fd4c4c22f8e8dd/XXXL" height="200" width="250">'
            }}
            options={{
                preset: Db[Object.keys(Db)[branchCode]].preset,
                draggable: false,
                iconCaptionMaxWidth: 120
            }} />;

    return (
        <div className="map-api">
            <YMaps
                lang={'ru_RU'}>
                <div className="map-container">
                    <Map
                        state={{
                            center: fromMainPage ? [55.767379, 37.584293] : Db[Object.keys(Db)[branchCode]].geometry,
                            zoom: 18
                        }}
                        width={'100%'}
                        height={500}>
                        {fromMainPage ? showAllBrances : showOneBranch}
                        <ZoomControl />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
};

export default MapApi;