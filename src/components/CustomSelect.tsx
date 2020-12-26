import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

export type SelectItem = {
  value: string
  label: string
}

type CustomSelectProps = {
  label: string
  value: string
  items: SelectItem[]
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  items,
  onChange,
}) => (
  <FormControl variant="filled" fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange}>
      {items.map((item) => {
        return (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        )
      })}
    </Select>
  </FormControl>
)

export default CustomSelect
