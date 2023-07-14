import { CheckIcon, Select, Text, View } from 'native-base';
import Styles from './DropDownStyles';

interface CommonDropDownProps {
  data: string[];
  value: string | undefined;
  onValueChange: (itemValue: string) => void;
  title?: string;
  placeholder: string;
  isRequired?: boolean;
}

const RenderItems = (data: string[]) => {
  const renderedItems: React.JSX.Element[] = data.map((value: string, index: number) => (
    <Select.Item key={value} label={value} value={value} />
  ));
  return renderedItems;
};

const CommonDropDown = (props: CommonDropDownProps) => {
  const { value, onValueChange, title, data, placeholder, isRequired = false } = props;

  return (
    <View style={Styles.container}>
      {title && (
        <Text style={Styles.titleStyle}>
          {title}
          {isRequired && <Text style={Styles.requireTextStyle}>*</Text>}
        </Text>
      )}
      <View style={Styles.menuContainer}>
        <Select
          variant="unstyled"
          selectedValue={value}
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          _selectedItem={{
            bg: 'gray.200',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={onValueChange}
        >
          {RenderItems(data)}
        </Select>
      </View>
    </View>
  );
};

export default CommonDropDown;
