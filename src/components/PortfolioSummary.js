import React, { useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PortfolioSummary = () => {
  const [depositAmount, setDepositAmount] = useState('Deposit Amt'); 

  const handleSelectChange = (event) => {
    setDepositAmount(event.target.value);
  };


 
const SelectBox =()=> {
  
  return (
    <Box sx={{ minWidth: 120 }}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Deposit Amt</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={depositAmount}
    label="Deposit Amt"
    onChange={handleSelectChange}
  >
    <MenuItem value={10}>10,000</MenuItem>
    <MenuItem value={20}>20,000</MenuItem>
    <MenuItem value={30}>30,000</MenuItem>
  </Select>
</FormControl>
    </Box>
  );
}
  
  const RenderChart = () => {
   
const data = [
  { label: "Bajaj Finserv", value: 350, color: "#6C63FF" },
  { label: "Shriram Finance", value: 280, color: "#FA9D17" },
  { label: "Mahindra Finance", value: 210, color: "#B9C606" },
  { label:"Utkarsh Small Finance Bank" , value: 560, color: "#59CBD3" },
];

const sizing = {
  margin: { right: 10 },
  width: 10,
  height: 306,
  legend: { hidden: true ,fontSize:"2px" },
  
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

return(
  <PieChart
      series={[
        {
          outerRadius: 140,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 12,
        },
      }}
      {...sizing}
    />
)
  };



  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Your FD Portfolio</h2>
        <div>
<SelectBox/>  
        </div>
      </div>
      <div className='flex justify-center'>
      < RenderChart/>
      </div>
     
    </div>
  );
};

export default PortfolioSummary;
