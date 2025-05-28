import React from 'react'
import HeaderSection from '../components/health/HeaderSection';
import BookCard from '../components/health/BookCard';
import Banner from '../components/health/banner';
import HealthPage from '../components/health/HealthPage';
export default function HealthHomePage() {
  return (
    <>
      <HeaderSection />
      <Banner />
      <BookCard />
      <HealthPage />
    </>
  )
}
