import React, { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { MonthView } from "./MonthView";
import { getDatesInMonth } from "../Util";

export default function SwipableView({
  setCurrentDate,
  currentDate,
  innerComponent,
}) {
  const transformAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  // Moves after swipes and becomes transparent
  // Then moves to opposite side and moves back, becoming opaque
  // TODO: find a cleaner way of doing this
  const animateSwipe = (direction: string) => {
    let windowWidth = Dimensions.get("window").width;

    direction == "left" && (windowWidth = -windowWidth);

    // Fade and swipe out
    Animated.timing(transformAnim, {
      toValue: windowWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();

    // Wait for first animation to finish
    const timeOut = setTimeout(() => {
      // Place on oposite side of screen
      transformAnim.setValue(-windowWidth);

      // Determin date from direction of swipe
      const newDate = new Date(
        currentDate.getFullYear(),
        direction == "left"
          ? currentDate.getMonth() + 1
          : currentDate.getMonth() - 1,
        1
      );

      // Change the date before next animation
      setCurrentDate(newDate);

      // Fade and swipe in
      Animated.timing(transformAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      clearTimeout(timeOut);
    }, 200);
  };

  return (
    <Animated.View
      style={[
        {
          flex: 6,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          opacity: opacityAnim,
        },
        { transform: [{ translateX: transformAnim }] },
      ]}
      onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
      onTouchEnd={(e) => {
        this.touchX - e.nativeEvent.pageX > 20 && animateSwipe("left");
        e.nativeEvent.pageX - this.touchX > 20 && animateSwipe("right");
      }}
    >
      {innerComponent}
    </Animated.View>
  );
}
