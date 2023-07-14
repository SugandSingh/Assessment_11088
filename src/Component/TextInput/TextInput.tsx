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
  RenderIcon?: () => React.ReactNode;
  placeHolder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  isRequired?: boolean;
}

const CommonInput = (props: CommonInputProps) => {
  const {
    title,
    RenderIcon,
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
        {RenderIcon && (
          <View style={Styles.iconWrap}>
            <RenderIcon />
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
      </View>
    </View>
  );
};

export default CommonInput;
