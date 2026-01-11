import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DataObjectIcon from '@mui/icons-material/DataObject'
import FeedbackIcon from '@mui/icons-material/Feedback'
import GridOnIcon from '@mui/icons-material/GridOn'
import InputIcon from '@mui/icons-material/Input'
import LayersIcon from '@mui/icons-material/Layers'
import MenuIcon from '@mui/icons-material/Menu'
import NavigationIcon from '@mui/icons-material/Navigation'
import SmartButtonIcon from '@mui/icons-material/SmartButton'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const menuItems = [
  { id: 'overview', label: '概览', icon: <DashboardIcon /> },
  { id: 'buttons', label: 'Buttons', icon: <SmartButtonIcon /> },
  { id: 'inputs', label: 'Inputs', icon: <InputIcon /> },
  { id: 'navigation', label: 'Navigation', icon: <NavigationIcon /> },
  { id: 'surfaces', label: 'Surfaces', icon: <LayersIcon /> },
  { id: 'feedback', label: 'Feedback', icon: <FeedbackIcon /> },
  { id: 'dataDisplay', label: 'Data Display', icon: <DataObjectIcon /> },
  { id: 'dataGrid', label: 'Data Grid', icon: <GridOnIcon /> },
  { id: 'datePickers', label: 'Date Pickers', icon: <CalendarMonthIcon /> },
]

interface LayoutProps {
  children: React.ReactNode
  onNavigate: (page: string) => void
  currentPage: string
}

export default function Layout({
  children,
  onNavigate,
  currentPage,
}: LayoutProps) {
  const [open, setOpen] = useState(true)

  const drawerWidth = 240

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            MUI Components Demo
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={currentPage === item.id}
                onClick={() => onNavigate(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${open ? drawerWidth : 0}px)` },
          ml: { sm: open ? `${drawerWidth}px` : 0 },
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
