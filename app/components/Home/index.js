import React from 'react';
import NavHeaderImage from '../../../images/mobile_header_logo_wfl.png';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions, ImageBackground } from 'react-native';

export default ViewHeader = (props) => {
    const isEnabledBackbutton = props.showBackButton;
    const isEnabledMorebutton = props.showMoreButton;
    const isShowOnlyImage = props.showOnlyImage;
    const screen = Dimensions.get("screen");
    return (
        <View style={styles.parentView}>
            <ImageBackground source={NavHeaderImage} resizeMode="center" style={{ width: screen.width, height: 44, position: 'absolute' }} opacity={(isShowOnlyImage == "true") ? 1 : 0} />
            <View style={styles.container} opacity={(isShowOnlyImage == "false") ? 1 : 0}>
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
        </View >
    )
}
const styles = StyleSheet.create({
    parentView: {
        height: 44,
        width: "100%"
    },
    container: {
        height: 44,
        width: "100%",
        backgroundColor: "gray",
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute'
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