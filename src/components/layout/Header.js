'use client';
import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { ThemeToggle } from '..//ThemeToggle';
const Header = ({ type = 'type1', title, sharing }) => {
  const renderHeader = () => {
    switch (type) {
      //main header
      case 'type1':
        return (
          <header className='fixed top-0 left-0 right-0 backdrop-blur-md z-50 bg-white-500'>
            <Container size='full' className='flex justify-between items-center'>
              <Heading as={'h1'}>logo</Heading>
              <nav>nav</nav>
              <ThemeToggle />
            </Container>
          </header>
        );
      //sub header 이전,타이틀 각페이지에 맞는 버튼들
      case 'type2':
        return (
          <header className='fixed top-0 left-0 right-0 backdrop-blur-md z-50 bg-white-500'>
            <Container size='full' className='flex justify-between items-center'>
              <Button>이전</Button>
              {title && <Heading>{title}</Heading>}
              {sharing && <Button>공유</Button>}
              {/* {등록 && <Button>등록</Button>} */}
            </Container>
          </header>
        );
      //로그인 header
      case 'type3':
        return <div>type3</div>;
      default:
        return <div>default</div>;
    }
  };
  return renderHeader();
};
// const Header = () => {
//   return (

//   );
// };

export default Header;
