import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6" ;
import { Image } from 'react-native';

const Boats = ({name, description, poster})=> {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Icon name="sailboat" size={30} color="gray" />
                <Text style={{fontSize: 24, margin: 10, color: 'gray'}}>{name}</Text>
            </View>
            <Image
                source={poster}
                style={{ width: 400, height: 500 }}
            />
            <Text style={{color: 'gray'}}>{description}</Text>
        </ScrollView>
    );
};

export default Boats;

