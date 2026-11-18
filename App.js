import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList} from 'react-native';

const datasource = [
    {
        data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title: "Vowels",
        bgcolor: "skyblue",
    },
    {
        data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title: "Consonants",
        bgcolor: "khaki",
    }
];


const renderItem = ({item, index, section}) => {
    // return <Text>{item.key}</Text>;
    // };
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            onPress={() => {Alert.alert(section.title + " " + item.key + "selected!")}}>
            <Text style={styles.textStyle}>{item.key+1}. {section.title}</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>L09 - Exercise 2</Text>
            {/*<FlatList data={datasource}*/}
            {/*          renderItem={renderItem}/>*/}

            {/*<SectionList sections={datasource}*/}
            {/*             <contentContainerStyle={{padding:10}}*/}
            {/*             renderSectionHeader={({section: {title}}) => (*/}
            {/*                 <Text style={[styles.headerText, {backgroundColor:bgcolor}]>{title}</Text>*/}
            {/*             )}/>*/}
            {/*<StatusBar style="auto"/>*/}
            <SectionList
                sections={datasource}
                contentContainerStyle={{padding:10}}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, bgcolor}}) => (
                    <Text style={[styles.headerText, {backgroundColor:bgcolor}]}>{title}</Text>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        TextAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
