import {HStack, Avatar, Button, Actionsheet, useDisclose} from 'native-base';
import {ThemeComponentSizeType} from 'native-base/lib/typescript/components/types';
import * as React from 'react';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

interface AvatarProps {
  source?: string;
  onPress?: (res: ImagePickerResponse) => void;
  size?: ThemeComponentSizeType<'Avatar'>;
}

const changeProfileType = ['camera', 'gallery'];

const CommonAvatar = (props: AvatarProps) => {
  const {source, onPress, size} = props;
  const {isOpen, onOpen, onClose} = useDisclose();

  const selectProfileImage = async (type: string) => {
    if (type === changeProfileType[0]) {
      const result = await launchCamera({mediaType: 'photo'});
    } else {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      onPress(result);
      //   console.log(result);
    } 
  };

  return (
    <HStack justifyContent="center" space={2}>
      <Button
        backgroundColor={'transparent'}
        disabled={!onPress}
        onPress={onOpen}>
        <Avatar
          size={size ? size : 'xl'}
          source={{
            uri: source
              ? source
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
        />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            onPress={() => selectProfileImage(changeProfileType[0])}>
            Open Camera
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => selectProfileImage(changeProfileType[1])}>
            Open Gallery
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </HStack>
  );
};

export default CommonAvatar;

