import React from "react";

import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

import './Map-API.css';

// Ymaps API keys:
// 1) 08214da6e825bb8b4e37599b03c92015858b2316
// 2) 4abe14abc9b3e46c
// 3) 3Aa5ef8364e7502fbfcf8ea8ab9e7fada5c2752129afd88ddbd71a807f2dfe1378

const MapApi = () => {
    return (
        <div className="map-api">
            <YMaps
                lang={'ru_RU'}>
                <div className="map-container">
                    <Map
                        defaultState={{
                            center: [55.767379, 37.584293],
                            zoom: 18
                        }}
                        width={'100%'}
                        height={400}>
                        <Placemark
                            // Филиал № 2
                            // г. Москва, Рубцовская набережная, д. 4, корп. 3
                            geometry={[55.775819, 37.698538]}
                            properties={{
                                iconCaption: 'Филиал №2'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал № 3
                            // г. Москва, ?????
                            // geometry={[55.775819, 37.698538]}
                            properties={{
                                iconCaption: 'Филиал №3'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал № 4
                            // г. Москва, ул.  Студенческая, 26/3 стр.1
                            geometry={[55.742448, 37.546390]}
                            properties={{
                                iconCaption: 'Филиал №4'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал № 5
                            // Московская обл., г. Солнечногорск, ул. Советская, д.9, кв.7
                            geometry={[56.185873, 36.977101]}
                            properties={{
                                iconCaption: 'Филиал №5'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал № 8
                            // гор. Зеленоград, Заводская 16 а, офис 3
                            geometry={[55.976398, 37.178700]}
                            properties={{
                                iconCaption: 'Филиал №8'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал № 18
                            // гор. Москва, ул. Радужная, д.11 кв.61
                            geometry={[55.859802, 37.664860]}
                            properties={{
                                iconCaption: 'Филиал №18'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Филиал Интерлоер
                            // ггор. Москва,  ул. Кутузова, д. 2,/111
                            geometry={[55.720672, 37.417643]}
                            properties={{
                                iconCaption: 'Филиал №18'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIconWithCaption',
                                draggable: false,
                                iconCaptionMaxWidth: 120
                            }} />
                        <Placemark
                            // Центральный офис + филиал № 1
                            // г. Москва, ул. Зоологическая, д.30 стр. 2, пом /офис III
                            geometry={[55.767379, 37.584293]}
                            properties={{
                                iconContent: 'МКА "Защита"',
                            }}
                            options={{
                                preset: 'islands#lightBlueStretchyIcon',
                                draggable: false
                            }} />
                        <ZoomControl />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
};

export default MapApi;