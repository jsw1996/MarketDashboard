import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../index.css';
import { Select } from 'antd';
import { Symbols } from './Symbols';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const { Option } = Select;


const children = Symbols.map((element) => { return (<Option key={element.symbol} value={element.symbol} label={element.name + " " + element.symbol}>{element.name}</Option>) })

function SearchBar({ handleSelect }) {

    return (<Select
        placeholder="Search companies"
        notFoundContent="Company not found"
        showSearch showArrow={false}
        defaultOpen={false}
        // labelInValue={true}
        optionFilterProp="label"

        onSelect={value => { handleSelect(value) }}
        dropdownStyle={{ color: "black", width: "300px" }}
    >
        { children}
    </Select >)

}

export default SearchBar;