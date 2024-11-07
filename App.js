import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Boats from './components/Boats';

const App = () => {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>GetABoat - For Sale</Text>
                    <View style={styles.boatsContainer}>
                            <Boats
                                name="Sea Ray 500 Sundancer"
                                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                                poster={require('./img/sea_ray.jpg')}
                            />
                            <Boats
                                name="Four Winns Horizon 180"
                                description="A sporty look and refined details truly set the Horizon 180 above all others."
                                poster={require('./img/four_winns.jpg')}
                            />
                            <Boats
                                name="Flipper 640 ST"
                                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                                poster={require('./img/flipper.jpg')}
                            />
                            <Boats
                                name="Princess V48"
                                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                                poster={require('./img/princess.jpg')}
                            />
                            <Boats
                                name="Bayliner 175 Bowrider"
                                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                                poster={require('./img/bayliner.jpg')}
                            />
                            <Boats
                                name="Fairline Targa 47"
                                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                                poster={require('./img/fairline.jpg')}
                            />
                    </View>
            </ScrollView>
        );
};

export default App;

const styles = StyleSheet.create({
        container: {
                paddingVertical: 50,
                paddingHorizontal: 20,
                backgroundColor: '#E0F7FA',
        },
        title: {
                fontSize: 30,
                fontWeight: 'bold',
                color: '#00796B',
                textAlign: 'center',
                marginBottom: 20,
        },
        boatsContainer: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: 15,
                padding: 10,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
        },
});
