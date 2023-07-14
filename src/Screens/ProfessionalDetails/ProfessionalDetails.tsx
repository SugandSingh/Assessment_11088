import React, { useState } from 'react';
import { Heading, ScrollView, View } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CommonDropDown from '../../Component/DropDown/DropDown';
import CommonInput from '../../Component/TextInput/TextInput';
import CommonButton from '../../Component/Button/Button';
import Styles from './ProfessionalDetailsStyle';
import { Routes } from '../../Navigation/Routes';

type EducationFormData = {
  qualification: string;
  yearOfPassing: string;
  grade: string;
};

type ProfessionalFormData = {
  experience: string;
  designation: string;
  domain: string;
};

const Education: string[] = ['Post Graduate', 'Graduate', 'HSC/Diploma', 'SSC'];

const Year: string[] = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];

const Designations: string[] = [
  'Software Developer',
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
];

const Domains: string[] = ['Information Technology', 'Healthcare', 'Finance'];

type ProfessionalDetailsProps = {
  navigation: any;
};

const ProfessionalDetails: React.FC<ProfessionalDetailsProps> = ({ navigation }) => {
  const [educationFormData, setEducationFormData] = useState<EducationFormData>({
    qualification: '',
    yearOfPassing: '',
    grade: '',
  });

  const [professionalFormData, setProfessionalFormData] = useState<ProfessionalFormData>({
    experience: '',
    designation: '',
    domain: '',
  });

  const goBack = () => {
    navigation.goBack();
  };

  const goToAddress = () => {
    if (
      educationFormData.qualification &&
      educationFormData.yearOfPassing &&
      educationFormData.grade &&
      professionalFormData.experience &&
      professionalFormData.designation
    ) {
      navigation.navigate(Routes.ADDRESS_DETAILS);
    }
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        <Heading>Educational info</Heading>
        <CommonDropDown
          placeholder="Select your qualification"
          data={Education}
          title="Education"
          value={educationFormData.qualification}
          onValueChange={(value: string) =>
            setEducationFormData({ ...educationFormData, qualification: value })
          }
          isRequired
        />
        <CommonDropDown
          placeholder="Enter year of passing"
          data={Year}
          title="Year of passing"
          value={educationFormData.yearOfPassing}
          onValueChange={(value: string) =>
            setEducationFormData({ ...educationFormData, yearOfPassing: value })
          }
          isRequired
        />
        <CommonInput
          title="Grade"
          onChangeText={(value: string) =>
            setEducationFormData({ ...educationFormData, grade: value })
          }
          placeHolder="Enter your grade or percentage"
          isRequired
        />

        <Heading marginTop={5}>Professional info</Heading>

        <CommonInput
          title="Experience"
          onChangeText={(text: string) =>
            setProfessionalFormData({ ...professionalFormData, experience: text })
          }
          placeHolder="Enter the years of experience"
          isRequired
        />

        <CommonDropDown
          placeholder="Select designation"
          data={Designations}
          title="Designation"
          value={professionalFormData.designation}
          onValueChange={(value: string) =>
            setProfessionalFormData({ ...professionalFormData, designation: value })
          }
          isRequired
        />

        <CommonDropDown
          placeholder="Select domain"
          data={Domains}
          title="Domain"
          value={professionalFormData.domain}
          onValueChange={(value: string) =>
            setProfessionalFormData({ ...professionalFormData, domain: value })
          }
        />

        <View flexDirection="row" justifyContent="space-evenly">
          <CommonButton
            label="Previous"
            width={wp('40%')}
            variant="outline"
            onPress={goBack}
          />
          <CommonButton label="Next" width={wp('40%')} onPress={goToAddress} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfessionalDetails;
 