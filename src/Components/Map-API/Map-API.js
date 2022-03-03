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

const MapApi = ({ fromMainPage = false, branchCode = 8 }) => {

    const [zoomActive, setZoomActive] = useState(false);

    const branches = Object.keys(Db);
    const someBranch = Db[branches[branchCode]];
    const { adress, eMail, phones, workingTime } = someBranch.comment;

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
                    balloonContentHeader: `<a href=${Db[i].link || "http://мказащита.рф"} target="_blank" rel="noreferrer">${Db[i].iconCaption || Db[i].iconContent}</a>`,
                    balloonContentBody: `${Db[i].balloonText}${balloonImg}`
                }}
                options={{
                    preset: Db[i].preset,
                    draggable: false,
                    iconCaptionMaxWidth: 120
                }} />
        )
    })

    function getWorkingTime() {
        return workingTime.map((i, b) => <p key={b} className="buisness-card_working-time">{i}</p>)
    }

    function buisnessCard() {
        if (fromMainPage) {
            return (
                <div className="map-api_buisness-card">
                    <h2>Контакты</h2>
                    <div className="map-api_buisness-card_item">  {/* adress */}
                        <a href={adress[1]}>
                            <i className="bi bi-geo-alt" />
                            <p>{adress[0].slice(0, 36)}</p>
                            <p>{adress[0].slice(36)}</p>
                        </a>
                    </div>
                    <div className="map-api_buisness-card_item">  {/* working time */}
                        <i className="bi bi-clock" />
                        {getWorkingTime()}
                    </div>
                    <div className="map-api_buisness-card_item">  {/* telephones */}
                        <a href={`tel:${phones[0]}`} style={{ paddingBottom: 0 }}>
                            <i className="bi bi-telephone" />{phones[0]}
                        </a>
                        <br />
                        <a href={`tel:${phones[1]}`} style={{ paddingTop: 0 }}>{phones[1]}</a>
                    </div>
                    <div className="map-api_buisness-card_item">  {/* email */}
                        <a href={`mailto:${eMail[0]}?subject=Вопрос адвокату`}>
                            <i className="bi bi-envelope" />
                            {eMail[0]}
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                null
            )
        }
    }

    const showOneBranch =
        <Placemark
            key={someBranch.iconCaption}
            modules={['geoObject.addon.balloon']}
            geometry={(someBranch.geometry || [55.767379, 37.584293])}
            properties={{
                iconContent: someBranch.iconContent,
                iconCaption: someBranch.iconCaption,
                balloonContentHeader: `<a href=${someBranch.link || "http://мказащита.рф"} target="_blank" rel="noreferrer">${someBranch.iconCaption || someBranch.iconContent}</a>`,
                balloonContentBody: `${someBranch.balloonText}
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
            {buisnessCard()}
            <YMaps
                lang={'ru_RU'}>
                <div className="map-container">
                    <Map
                        state={{
                            center: fromMainPage ? window.innerWidth <= 900 ? [55.767379, 37.584293] : [55.767379, 37.5828093] : (Db[Object.keys(Db)[branchCode]].geometry || [55.767379, 37.584293]),
                            zoom: 18,
                            behaviors: zoomActive ? ['drag', 'scrollZoom', 'multiTouch'] : ['drag', 'multiTouch']
                        }}
                        width={'100%'}
                        height={720}>
                        {fromMainPage ? showAllBrances : showOneBranch}
                        <ZoomControl />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
};

export default MapApi;