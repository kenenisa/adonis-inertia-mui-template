import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useCustomForm } from 'src/hooks/use-custom-form'
import { FormHelperText } from '@mui/material'

export default function CCheckBox({ label, name, ...other }) {
  const { data, set, errors } = useCustomForm()
  const handleChange = (event) => {
    set(name, !!event.target.checked)
  }
  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            name={name}
            checked={!!data[name]}
            onChange={handleChange}
            {...other}
          />
        }
      />
      {errors[name] &&
        <FormHelperText id={name} error={true}>{JSON.stringify(errors[name])}</FormHelperText>
      }
    </>
  )
}
