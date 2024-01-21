import LinkMaterial from '@mui/material/Link'
import { Link } from '@inertiajs/react'
import { forwardRef } from 'react'

export default forwardRef(({ children, ...others }, ref) => (
  <LinkMaterial component={Link} sx={{ display: 'contents' }} ref={ref} {...others}>
    {children}
  </LinkMaterial>
))
