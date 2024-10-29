import { ReactNode } from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  onPress: () => void;
  title?: string;
  children?: ReactNode;
  variant?: "orange" | "transparent";
  style?: ViewStyle;
};

export const Button = ({
  onPress,
  title,
  children,
  variant = "orange",
  style,
}: ButtonProps) => {
  const isOrange = variant === "orange";
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, isOrange ? styles.orange : {}, style]}
    >
      {children !== undefined ? (
        children
      ) : (
        <Text
          style={
            isOrange ? styles.buttonOrangeText : styles.buttonTransparentText
          }
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 32,
  },
  buttonOrangeText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
  orange: {
    backgroundColor: "#FF6C00",
  },

  buttonTransparentText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1B4371",
  },
  buttonTransparentBg: {
    marginHorizontal: "auto",
  },
});
