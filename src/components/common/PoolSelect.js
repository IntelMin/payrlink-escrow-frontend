import React from 'react';
import * as commHelper from '../../helpers/common';
import Select from 'react-select';

const PoolSelect = (props) => {

  const options = commHelper.generatePoolSelectOptions();
  const handlePoolChange = (e) => {
    if (props.onChange)
      props.onChange(e.value);
  }

  return (
    <Select
      options={options}
      defaultValue = {options[0]}
      isSearchable={false}
      onChange={handlePoolChange}
      className={"pool-select " + props.className}
    />
  );
}

export default PoolSelect;