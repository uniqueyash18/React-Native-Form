import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(40),
  },
  card: {
    backgroundColor: "lightgrey",
    width: moderateScale(300),
    borderRadius: 8,
    paddingHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
    padding: moderateScale(10),
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  img: { width: moderateScale(20), height: moderateVerticalScale(20), alignSelf: "center" },
});
