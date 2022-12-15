import React, { useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { MonthView } from "./MonthView";
import { getDatesInMonth } from "../Util";

export default function SwipableView({ setCurrentDate, currentDate }) {
  const transformAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  // Moves after swipes and becomes transparent
  // Then moves to opposite side and moves back, becoming opaque
  const animateSwipe = (direction: string) => {
    let windowWidth = Dimensions.get("window").width;

    direction == "left" && (windowWidth = -windowWidth);

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

    setTimeout(() => {
      transformAnim.setValue(-windowWidth);
      setCurrentDate(
        new Date(
          currentDate.getFullYear(),
          direction == "left"
            ? currentDate.getMonth() + 1
            : currentDate.getMonth() - 1,
          1
        )
      );

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
      <MonthView
        datesInMonth={getDatesInMonth(currentDate)}
        currentDate={currentDate}
        changeDate={setCurrentDate}
      />
    </Animated.View>
  );
}
