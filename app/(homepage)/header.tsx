import { makeStyles } from "@rneui/base";
import React from "react";
import { PlatformColor, View } from "react-native";
import { palette } from "../theme";
type Props = {
    fullWidth?: boolean;
};

const useStyles = makeStyles((theme, props: Props) => ({
    container: {
        background: palette.darkBlue,
        width: props.fullWidth ? '100%' : 'auto',
    },
    text: {
        color: palette.primary,
    },
}));

const MyComponent = (props: Props) => {
    const styles = useStyles(props);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Invoice App</Text>
        </View>
    );
};

export default MyComponent;