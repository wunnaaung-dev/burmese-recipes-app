import React from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [
  { value: '000', label: 'အကုန်စား' },
  { value: '001', label: 'အသားစား' },
  { value: '002', label: 'သက်သက်လွတ်' },
];

interface SelectItemsProps {
  onChange: (value: string) => void;
}

const SelectItems: React.FC<SelectItemsProps> = ({ onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
      <Space direction="vertical" className=" w-32 md:w-52">
        <Select
          defaultValue="000"
          onChange={onChange}
          style={{ width: '100%' }}
          options={options}
        />
      </Space>
    </div>
  );
};

export default SelectItems;