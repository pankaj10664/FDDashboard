import React, { useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PortfolioSummary = () => {
  const [depositAmount, setDepositAmount] = useState(''); 

  const handleSelectChange = (event) => {
    setDepositAmount(event.target.value);
  };


 
const SelectBox =()=> {
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Deposit Amt"
          value={depositAmount}
          onChange={handleSelectChange}
          className="border border-gray-300 rounded  focus:border-blue-500 focus:outline-none"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
  
  const renderChart = () => {
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  };



const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Your FD Portfolio</h2>
        <div>
<SelectBox/>


         
        </div>
      </div>
      {renderChart()}
    </div>
  );
};

export default PortfolioSummary;
