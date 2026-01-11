import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Link,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export default function NavigationDemo() {
  const [tabValue, setTabValue] = useState(0)
  const [navValue, setNavValue] = useState(0)
  const [page, setPage] = useState(1)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Navigation Components
      </Typography>

      {/* Breadcrumbs */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Breadcrumbs
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Typography sx={{ color: 'text.primary' }}>Products</Typography>
      </Breadcrumbs>

      {/* Tabs */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Tabs
      </Typography>
      <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      {/* Pagination */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Pagination
      </Typography>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} variant="outlined" />
      </Stack>

      {/* Bottom Navigation */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Bottom Navigation
      </Typography>
      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(_, newValue) => setNavValue(newValue)}
        sx={{ maxWidth: 500 }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
