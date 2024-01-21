import { useState } from 'react'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import { alpha, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

import { useRouter } from 'src/routes/hooks'

import { bgGradient } from 'src/theme/css'

import Logo from 'src/components/logo'
import Iconify from 'src/components/iconify'
import { router } from '@inertiajs/react'
import { Form } from 'src/hooks/use-custom-form'
import CustomTextField from 'src/components/Form/CInput'
import CInput from 'src/components/Form/CInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CCheckBox from 'src/components/Form/CCheckBox'

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme()


  const [showPassword, setShowPassword] = useState(false)


  const renderForm = (
    <>
      <Form
        defaultValue={{ email: '', password: '', remember: '' }}
        to="/web/login"
        required={['email', 'password']}
        submitComp="Login"
      >

        <Stack spacing={3}>

          <CInput Comp={TextField} name="email" label="Email address" />

          <CInput
            Comp={TextField}
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CCheckBox name="remember" label="Remember me" />
        </Stack>

        {/*<Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>*/}
        {/*  <Link variant="subtitle2" underline="hover">*/}
        {/*    Forgot password?*/}
        {/*  </Link>*/}
        {/*</Stack>*/}
      </Form>
    </>
  )

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Stack spacing={3}>

            <Typography variant="h4">Login</Typography>

            {/*<Typography variant="body2" sx={{ mt: 2, mb: 5 }}>*/}
            {/*  Don’t have an account?*/}
            {/*  <Link variant="subtitle2" sx={{ ml: 0.5 }}>*/}
            {/*    Get started*/}
            {/*  </Link>*/}
            {/*</Typography>*/}

            {/*<Stack direction="row" spacing={2}>*/}
            {/*  <Button*/}
            {/*    fullWidth*/}
            {/*    size="large"*/}
            {/*    color="inherit"*/}
            {/*    variant="outlined"*/}
            {/*    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}*/}
            {/*  >*/}
            {/*    <Iconify icon="eva:google-fill" color="#DF3E30" />*/}
            {/*  </Button>*/}

            {/*  <Button*/}
            {/*    fullWidth*/}
            {/*    size="large"*/}
            {/*    color="inherit"*/}
            {/*    variant="outlined"*/}
            {/*    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}*/}
            {/*  >*/}
            {/*    <Iconify icon="eva:facebook-fill" color="#1877F2" />*/}
            {/*  </Button>*/}

            {/*  <Button*/}
            {/*    fullWidth*/}
            {/*    size="large"*/}
            {/*    color="inherit"*/}
            {/*    variant="outlined"*/}
            {/*    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}*/}
            {/*  >*/}
            {/*    <Iconify icon="eva:twitter-fill" color="#1C9CEA" />*/}
            {/*  </Button>*/}
            {/*</Stack>*/}

            {/*<Divider sx={{ my: 3 }}>*/}
            {/*  <Typography variant="body2" sx={{ color: 'text.secondary' }}>*/}
            {/*    OR*/}
            {/*  </Typography>*/}
            {/*</Divider>*/}

            {renderForm}
          </Stack>

        </Card>
      </Stack>
    </Box>
  )
}
