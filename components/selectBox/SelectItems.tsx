"use client";
import { setSelectedCategory } from "@/features/filter/filterSlice";
import { useFetchRecipesQuery } from "@/features/receipes-api-slice";
import { useAppDispatch } from "@/hooks/hooks";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [
  { value: "000", label: "အကုန်စား" },
  { value: "001", label: "အသားစား" },
  { value: "002", label: "သက်သက်လွတ်" },
];

const SelectItems: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleChange = (value: '000' | '001' | '002') => {
    dispatch(setSelectedCategory(value));
  };

  return (
    <div className="h-full">
      <Space direction="vertical" className=" w-32 md:w-52">
        <Select
          defaultValue="000"
          style={{ width: "100%", height: "50px" }}
          options={options}
          onChange={handleChange}
        />
      </Space>
    </div>
  );
};

export default SelectItems;
