import { Container } from '@mui/material'
import { useState } from 'react'
import Layout from '@/components/Layout'
import ButtonsDemo from '@/pages/ButtonsDemo'
import DataDisplayDemo from '@/pages/DataDisplayDemo'
import DataGridDemo from '@/pages/DataGridDemo'
import DatePickersDemo from '@/pages/DatePickersDemo'
import FeedbackDemo from '@/pages/FeedbackDemo'
import InputsDemo from '@/pages/InputsDemo'
import NavigationDemo from '@/pages/NavigationDemo'
import Overview from '@/pages/Overview'
import SurfacesDemo from '@/pages/SurfacesDemo'

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview')

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />
      case 'buttons':
        return <ButtonsDemo />
      case 'inputs':
        return <InputsDemo />
      case 'navigation':
        return <NavigationDemo />
      case 'surfaces':
        return <SurfacesDemo />
      case 'feedback':
        return <FeedbackDemo />
      case 'dataDisplay':
        return <DataDisplayDemo />
      case 'dataGrid':
        return <DataGridDemo />
      case 'datePickers':
        return <DatePickersDemo />
      default:
        return <Overview />
    }
  }

  return (
    <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
      <Container maxWidth="xl">{renderPage()}</Container>
    </Layout>
  )
}
