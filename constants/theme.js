import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import * as Font from 'expo-font';

export const COLORS = {
    //base colors
    primary: "#b22222",
    secondary: "#cdcdd2",

    black: "#1e1f20",
    white: "#ffffff",

    lightGray: "#F5F5F6",
    lightGray2: "#f6f6f7",
    lightGray3: "#efeff1",
    lightGray4: "#f8f8f9",
    transparent: "transparent",
    darkgray: '#898c95',
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",
};

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3:16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
}



export const FONTS = {
    largeTitle: { fontFamily: "Roboto", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS};
export default appTheme;