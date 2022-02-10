// modules
import React, { useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

//Db
import Db from '../../Db/Map-API-Db/Map-coordinates.js'

// styles
import './Map-API.css';

// possible Ymaps API keys:
// 1) 08214da6e825bb8b4e37599b03c92015858b2316
// 2) 4abe14abc9b3e46c
// 3) 3Aa5ef8364e7502fbfcf8ea8ab9e7fada5c2752129afd88ddbd71a807f2dfe1378

const MapApi = ({ fromMainPage = false, branchCode = [7] }) => {

    const [ zoomActive, setZoomActive ] = useState(false);

    const branches = Object.keys(Db);
    const someBranch = Db[Object.keys(Db)[branchCode]];

    const showAllBrances = branches.map((i) => {
        let balloonImg = Db[i].balloonImg ? `<br><img src=${Db[i].balloonImg} height="200" width="250">` : "";
        return (
            <Placemark
                key={Db[i].iconCaption}
                modules={['geoObject.addon.balloon']}
                geometry={Db[i].geometry}
                properties={{
                    iconContent: Db[i].iconContent,
                    iconCaption: Db[i].iconCaption,
                    balloonContentHeader:`<a href=${Db[i].link || "http://мказащита.рф"} target="_blank" rel="noreferrer">${Db[i].iconCaption || Db[i].iconContent}</a>`,
                    balloonContentBody:`${Db[i].balloonText}${balloonImg}`
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
            key={someBranch.iconCaption}
            modules={['geoObject.addon.balloon']}
            geometry={(someBranch.geometry || [55.767379, 37.584293])}
            properties={{
                iconContent: someBranch.iconContent,
                iconCaption: someBranch.iconCaption,
                balloonContentHeader:`<a href=${someBranch.link || "http://мказащита.рф"} target="_blank" rel="noreferrer">${someBranch.iconCaption || someBranch.iconContent}</a>`,
                balloonContentBody:`${someBranch.balloonText}
                ${someBranch.balloonImg ? `<br><img src=${someBranch.balloonImg} height="200" width="250">` : ""}`
            }}
            options={{
                preset: someBranch.preset,
                draggable: false,
                iconCaptionMaxWidth: 120
            }} />;

    return (
        <div className="map-api"
            onClick={() => setZoomActive(true)}>
            <YMaps
                lang={'ru_RU'}>
                <div className="map-container">
                    <Map
                        state={{
                            center: fromMainPage ? [55.767379, 37.584293] : (Db[Object.keys(Db)[branchCode]].geometry || [55.767379, 37.584293]),
                            zoom: 18,
                            behaviors: zoomActive ? ['drag','scrollZoom','multiTouch'] : ['drag','multiTouch'] 
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