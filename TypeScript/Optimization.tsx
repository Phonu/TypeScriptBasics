import { isEqual } from "lodash";
import React from "react";
import { View, Text } from "react-native";

interface ActionItemProps {
  action1: string;
  action2: number;
  onpress: () => void;
}

const ActionItem = (props: ActionItemProps) => {
  return (
    <View>
      <Text>{props.action1}</Text>
    </View>
  );
};

const ActionItemDataUnchanged = (
  prevProps: ActionItemProps,
  nextProps: ActionItemProps
) => {
  return isEqual(prevProps, nextProps);
};

export default React.memo(ActionItem, ActionItemDataUnchanged);
