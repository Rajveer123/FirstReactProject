import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
export default ViewHeader = (props) => {
    const isEnabledBackbutton = props.showBackButton;
    const isEnabledMorebutton = props.showMoreButton;
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={props.handleBackButtonClick}
                disabled={(isEnabledBackbutton == "true") ? false : true}>
                <View style={styles.subView} opacity={(isEnabledBackbutton == "true") ? 1 : 0}>
                    <Text style={styles.backButton}>Back</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerView}>
                <Text style={styles.title}>{props.projectName}</Text>
            </View>
            <TouchableWithoutFeedback onPress={props.handleMoreButtonClick}
                disabled={(isEnabledMorebutton == "true") ? false : true}>
                <View style={styles.subView} opacity={(isEnabledMorebutton == "true") ? 1 : 0}>
                    <Text style={styles.moreButton}>More</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 44,
        width: "100%",
        backgroundColor: "gray",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    subView: {
        flex: 1,
        justifyContent: "center",
    },
    backButton: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        fontSize: 18,
        color: "white",
        fontWeight: "normal",
    },
    headerView: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
    },
    moreButton: {
        alignSelf: 'flex-end',
        fontSize: 18,
        color: "white",
        fontWeight: "normal",
        marginRight: 10
    }
});