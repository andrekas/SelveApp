import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, Linking} from 'react-native';
//import MapView, from 'react-native-maps';
import {MapView} from 'expo';

let {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 59.436962;
const LONGITUDE = 24.753574;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            markers: [
                {
                    coordinate: {
                        latitude: 59.401440,
                        longitude: 24.709393,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 4 pesukohta, 08:00-21:45",
                    link: 'http://waze.com/ul?ll=59.401440,24.709393&navigate=yes'

                },
                {
                    coordinate: {
                        latitude: 59.427837,
                        longitude: 24.665210,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.427837,24.665210&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.448951,
                        longitude: 24.886685,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 3 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.448951,24.886685&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.445089,
                        longitude: 24.882158,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.445089,24.882158&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.447506,
                        longitude: 24.692534,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 4 pesukohta, 07:00-22:45",
                    link: 'http://waze.com/ul?ll=59.447506,24.692534&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.462224,
                        longitude: 24.905059,
                    },
                    title: "Mündipesula",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.462224,24.905059&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.421322,
                        longitude: 24.694940,
                    },
                    title: "Smartwash",
                    description: "1€=100s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.421322,24.694940&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.451079,
                        longitude: 24.873603,
                    },
                    title: "Smartwash",
                    description: "1€=100s, 6 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.451079,24.873603&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.427349,
                        longitude: 24.659478,
                    },
                    title: "Jazz selvepesula",
                    description: "0.5€=45-90s, 5 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.427349,24.659478&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.450586,
                        longitude: 24.861331,
                    },
                    title: "Jazz selvepesula",
                    description: "0.5€=45-90s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.450586,24.861331&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.437315,
                        longitude: 24.708722,
                    },
                    title: "NB autopesula",
                    description: "1€=120s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.437315,24.708722&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.424892,
                        longitude: 24.748162,
                    },
                    title: "NB autopesula",
                    description: "€=120s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.424892,24.748162&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.370610,
                        longitude: 24.717651,
                    },
                    title: "Wash24",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.370610,24.717651&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.431113,
                        longitude: 24.810077,
                    },
                    title: "Wash24",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.431113,24.810077&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.430076,
                        longitude: 24.837253,
                    },
                    title: "Nutipesu",
                    description: "1€=100s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.430076,24.837253&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.449732,
                        longitude: 24.854986,
                    },
                    title: "Nutipesu",
                    description: "1€=100s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.449732,24.854986&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.415620,
                        longitude: 24.683268,
                    },
                    title: "Isepesula24",
                    description: "1€=120s, 4 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.415620,24.683268&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.429653,
                        longitude: 24.781960,
                    },
                    title: "Isepesula24",
                    description: "1€=120s, 5 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.429653,24.781960&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.406185,
                        longitude: 24.643152,
                    },
                    title: "Aqua pesula",
                    description: "1€=90s, 6 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.406185,24.643152&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.394072,
                        longitude: 24.819629,
                    },
                    title: "Aqua pesula",
                    description: "Valmimisel!",
                    link: 'http://waze.com/ul?ll=59.394072,24.819629&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.414255,
                        longitude: 24.756928,
                    },
                    title: "Linnapesulad",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.414255,24.756928&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.439662,
                        longitude: 24.884763,
                    },
                    title: "Linnapesulad",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.439662,24.884763&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.340218,
                        longitude: 24.612700,
                    },
                    title: "Pese Ise autopesula",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.340218,24.612700&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.507509,
                        longitude: 24.825335,
                    },
                    title: "Pese Ise autopesula",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.507509,24.825335&navigate=yes'
                },
                {
                    coordinate: {
                        latitude: 59.425497,
                        longitude: 24.642510,
                    },
                    title: "EHRLE autopesula",
                    description: "1€=100s, 2 pesukohta, 24h",
                    link: 'http://waze.com/ul?ll=59.425497,24.642510&navigate=yes'
                },


            ],
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                    error: null,
                });
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <MapView
                provider="google"
                style={styles.map}
                showsUserLocation={true}
                followUserLocation={true}
                region={this.state.region}
            >
                {this.state.markers.map((marker, index) => {
                    return (
                        <MapView.Marker key={index} coordinate={marker.coordinate}>
                            <MapView.Callout onPress={() => Linking.openURL(marker.link)}>
                                <View>
                                    <Text style={styles.title}>
                                        {marker.title}
                                    </Text>
                                    <Text style={styles.text}>
                                        {marker.description}
                                    </Text>
                                    <Text style={styles.text}>
                                        Vajuta siia, et alustada navigeerimist
                                    </Text>
                                </View>
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}

            </MapView>
        );
    }
}


const styles = StyleSheet.create({
    map: {
        flexGrow: 1,

    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'center',
    }
});
