import {StyleSheet} from "react-native";
import { Mycolors } from "./Colores";

export const Styles = StyleSheet.create({
    btnPurple:{
        height:72,
        width:72,
        background:Mycolors.Purple,
        justifyContent: "center",
        alignItems: "center",
        margin: 4,
        borderRadius:24,
    },
    btnMint:{
        height:72,
        width:72,
        background:Mycolors.Mint,
        justifyContent: "center",
        alignItems: "center",
        margin: 4,
        borderRadius:24,
    },
    row:{
        maxWidth:"100%",
        flexDirection:"row",
    },
    viewBottom: {
        position: "absolute",
        bottom: 50,
    },
    screenFirstNumber:{
        fontSize:96,
        colo: Mycolors.Black,
        fontWeight: "200",
        alignSelf: "flex-end",
    },
    screenSecondNumber:{
        fontSize:40,
        colo: Mycolors.Black,
        fontWeight: "200",
        alignSelf: "flex-end",
    }
});