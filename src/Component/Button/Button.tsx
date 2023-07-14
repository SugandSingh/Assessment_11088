import * as React from 'react';
import { Button, View } from 'native-base';

type variantType = 'solid' | 'outline' | 'link' | 'ghost' | 'subtle' | 'unstyled';

interface CommonButtonProps {
  label?: string;
  bgColor?: string;
  variant?: variantType;
  width?: number;
  onPress: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label = 'Submit',
  bgColor = '#023047',
  variant = 'solid',
  width,
  onPress = () => console.log('Button pressed')
}) => {
  return (
    <View margin={2}>
      <Button
        onPress={onPress}
        variant={variant}
        borderColor={variant === 'outline' ? bgColor : undefined}
        width={width}
        bgColor={variant === 'solid' ? bgColor : undefined}
      >
        {label}
      </Button>
    </View>
  );
};

export default CommonButton;
