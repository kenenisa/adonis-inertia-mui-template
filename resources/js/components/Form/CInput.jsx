import { useCustomForm } from 'src/hooks/use-custom-form'
import { FormHelperText } from '@mui/material'


export default function CInput({ Comp, name, ...other }) {
  const { data, set, errors } = useCustomForm()
  const handleChange = (event) => {
    set(name, event.target.value)
  }
  const helpTextId = name+'-helper-text'
  return (
    <>
      <Comp
        name={name}
        value={data[name]}
        onChange={handleChange}
        aria-describedby={helpTextId}
        {...other}
      />
      {errors[name] &&
        <FormHelperText id={helpTextId} error={true}>{JSON.stringify(errors[name])}</FormHelperText>
      }
    </>
  )
}
