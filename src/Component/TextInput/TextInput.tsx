import React from 'react';
import { TextInput } from 'react-native';
import { Text, View } from 'native-base';
import Styles from './TextInputStyles';

type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';

interface CommonInputProps {
  title?: string;
  RenderIconLeft?: () => React.ReactNode;
  RenderIconRight?:() => React.ReactNode;
  placeHolder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  isRequired?: boolean;
}

const CommonInput = (props: CommonInputProps) => {
  const {
    title,
    RenderIconLeft,
    RenderIconRight,
    placeHolder,
    onChangeText,
    secureTextEntry,
    keyboardType,
    isRequired = false,
  } = props;

  return (
    <View style={Styles.container}>
      {title && (
        <Text style={Styles.titleStyle}>
          {title}
          {isRequired && <Text style={Styles.requireTextStyle}>*</Text>}
        </Text>
      )}
      <View style={Styles.textInputContainer}>
        {RenderIconLeft && (
          <View style={Styles.iconWrap}>
            <RenderIconLeft />
          </View>
        )}
        <View style={Styles.placeholderWrap}>
          <TextInput
            style={Styles.textInputText}
            secureTextEntry={secureTextEntry}
            onChangeText={text => onChangeText(text)}
            placeholderTextColor="gray"
            placeholder={placeHolder}
            keyboardType={keyboardType || 'default'}
          />
        </View>
        {RenderIconRight && (
          <View style={Styles.iconWrap}>
            <RenderIconRight />
          </View>)}
      </View>
    </View>
  );
};

export default CommonInput;
