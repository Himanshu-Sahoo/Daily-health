import React from 'react'
import HeaderSection from '../../components/health/HeaderSection';
import BookCard from '../../components/health/BookCard';
import Banner from '../../components/health/banner';
import LatestArticle from '../../components/health/LatestArticle';
import Footer from '../../components/health/Footer';
import Perk from '../../components/health/perks';
export default function HealthHomePage() {
  return (
    <>
      <HeaderSection />
      <Banner />
      <BookCard />
     <LatestArticle />
      <Perk />
     <Footer />
      
    </>
  )
}
