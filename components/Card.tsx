import { Card, makeStyles } from "@rneui/themed";
import { palette } from "../app/theme";
import { View, Text } from "./Themed";
import { Platform } from "react-native";

type CardProps = {
    width?: number;
    height?: number;
    status?: string;
    id?: number;
    name?: string;
    date?: string;
    amount?: number;
};

const useStyles = makeStyles((theme, props) => ({
    cardRoot: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    propertyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    valuesForFirstView: {
        fontSize: 15,
        color : 'black',
        marginBottom : 10
    },
    valuesForSecondView: {
        fontSize: 15,
        color: 'gray',
        marginBottom : 10
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    paddingFor : {
        padding : 30,
    }
}));

const CardComp = ({ width = 200, height = 134, status = 'Paid', id = 1, name = 'Saba', date = '2024-01-26', amount = 1555 }: CardProps) => {
    const styles = useStyles({status});
    const cardRootStyles = [styles.cardRoot, { width, height }];
    return(
        <View style={cardRootStyles}>
            <View style={styles.column}>
                <Text style={styles.valuesForFirstView}>{id}</Text>
                <Text style={[styles.valuesForFirstView]}>{date}</Text>
                <Text style={styles.valuesForFirstView}>{amount}</Text>
            </View>
            <View style = {styles.paddingFor}>
                <Text style={styles.valuesForSecondView}>{name}</Text>
                <Text style={styles.valuesForSecondView}>{status}</Text>
            </View>
        </View>
    )
}

export default CardComp;