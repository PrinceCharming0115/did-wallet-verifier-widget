import React, { useEffect, useState } from 'react';
import { BoxProps, Button, Input } from '@mui/material';
import { CountryRequestComponentStyle } from './index.style';
import { TrashSVG, CancelSVG } from '../../../assets/icon';
import { Box } from '@mui/system';
import { DropDownComponent } from '../Dropdown';
import { countryList } from '../../../consts';
import { group } from 'console';

type CountryRequestComponentProps = BoxProps & {
  label: string;
  index: number;
  type: string;
  group: string;
  removeAttribute: (index: number) => void;
  setCountries: (values: string[], type: string) => void;
};

export const CountryRequestComponent: React.FC<CountryRequestComponentProps> = (props) => {
  const { label, index, type, group, removeAttribute, setCountries, ...rest } = props;

  const [dropdownCountryList, setDropdownCountryList] = useState<string[]>(countryList);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleChangeCountry = (value: string) => {
    setSelectedCountries([...selectedCountries, value]);

    const temp = dropdownCountryList.filter(function(country) {
      return country !== value;
    });
    setDropdownCountryList([...temp]);

  }

  const handleCloseBtnClicked = (index: number, country: string) => {
    const tempDropdownCountryList = dropdownCountryList;
    tempDropdownCountryList.push(country);

    const temp = selectedCountries;
    temp.splice(index, 1);
    setSelectedCountries([...temp]);
    setCountries(selectedCountries, group);
  }

  useEffect(() => {
    setCountries(selectedCountries, group);
  }, [selectedCountries]);

   return <CountryRequestComponentStyle className={rest.className} >
    <Box className='request-container'>
      <Box className='label-wrapper'>
        { label }
        <Button className="remove-btn" onClick={() => removeAttribute(index)}>
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
        values={dropdownCountryList}     
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