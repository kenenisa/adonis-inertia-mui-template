// MyContext.js
import React, { createContext, useState, useContext, useMemo } from 'react'
import { FormControl, LinearProgress } from '@mui/material'
import { useForm } from '@inertiajs/react'
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'

// Create a context with a default value
const FormContext = createContext({})

// Create a provider component
const Form = ({
    defaultValue,
    to,
    required = [],
    submitComp,
    children
  }) => {
  const { data, setData, post, processing, errors } = useForm(defaultValue)
  const handleSubmit = (e) => {
    e.preventDefault()
    post(to)
  }
  const isDirty = useMemo(() => !!required.find(key => data[key] === '' || data[key] === []), [required, data])

  return (<FormContext.Provider value={{ data, errors, set: setData }}>
      <FormControl>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {processing && <LinearProgress />}
            {children}
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              loading={processing}
              disabled={isDirty}
              // onClick={handleClick}
            >
              {submitComp || 'Submit'}
            </LoadingButton>
          </Stack>
        </form>
      </FormControl>
    </FormContext.Provider>)
}

const useCustomForm = () => {
  return useContext(FormContext)
}


export { useCustomForm, Form }
