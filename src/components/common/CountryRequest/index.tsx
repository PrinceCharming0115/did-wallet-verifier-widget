import React, { useEffect, useState } from 'react';
import { BoxProps, Button, Box } from '@mui/material';
import { CountryRequestComponentStyle } from './index.style';
import { TrashSVG, CancelSVG } from '../../../assets/icon';
import { DropDownComponent } from '../Dropdown';
import { countryList } from '../../../consts';

type CountryRequestComponentProps = BoxProps & {
  label: string;
  index: number;
  type: string;
  group: string;
  options: string[];
  removeAttribute: (index: number, label: string, isCountry?: string) => void;
  setCountries: (value: string, type: string) => void;
};

export const CountryRequestComponent: React.FC<CountryRequestComponentProps> = (props) => {
  const { label, index, type, group, options, removeAttribute, setCountries, ...rest } = props;

  const [dropdownCountryList, setDropdownCountryList] = useState<string[]>(countryList);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleChangeCountry = (value: string) => {
    setSelectedCountries([...selectedCountries, value]);

    const temp = dropdownCountryList.filter((country) => {
      return country !== value;
    });
    setDropdownCountryList([...temp]);
    setCountries(value, group);

  }

  const handleCloseBtnClicked = (index: number, country: string) => {
    const tempDropdownCountryList = dropdownCountryList;
    tempDropdownCountryList.push(country);

    const temp = selectedCountries;
    temp.splice(index, 1);
    setSelectedCountries([...temp]);
    setCountries(country, group);
  }

  useEffect(() => {
    
  }, [selectedCountries]);

   return <CountryRequestComponentStyle className={rest.className} >
    <Box className='request-container'>
      <Box className='label-wrapper'>
        { label }
        <Button className="remove-btn" onClick={() => removeAttribute(index, label, group)}>
          <img src={TrashSVG}></img>
        </Button>
      </Box>
      <Box className='selected-country-list'>
        {
          selectedCountries.map((country, index) => (
            <Box className='selected-country' key={index}>
              <span>{country}</span>
              <Button onClick={() => handleCloseBtnClicked(index, country)}><img src={CancelSVG}></img></Button>
            </Box>
          ))

        }
      </Box>
      <DropDownComponent 
        values={options}     
        className='white-background'
        placeholder='Add new country'
        onChangeValue={handleChangeCountry}
      />
    </Box>
    <Box className='request-type'>
      {type}
    </Box>
  </CountryRequestComponentStyle>
}