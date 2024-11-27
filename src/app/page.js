'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import { Container } from '@chakra-ui/react';
import HomeContent from './home/home';

export default function Home() {
  return (
    <>
      <Header />

      <Main>
        {/* <Container></Container> */}
        <HomeContent />
      </Main>

      <Footer />
    </>
  );
}
