import React, { useState } from 'react';
import styles from './index.module.scss';
import Select from 'react-select';
interface MultiSelectProps {
  items: string[];
  initialValues?: string[];
  onChange?: (selectedItems: string[]) => void;
}
export const MultiSelectComponent: React.FC<MultiSelectProps> = ({
  items,
  initialValues = [],
  onChange,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(initialValues);
  const handleSelect = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter(selectedItem => selectedItem !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    onChange && onChange(newSelectedItems);
  };
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      className={styles.multiSelectComponent}
      options={items.map(item => ({ value: item, label: item }))}
      onInputChange={handleSelect}
    />
  );
};
