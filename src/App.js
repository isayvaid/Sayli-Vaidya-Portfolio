import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useState, useEffect } from "react";
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails'

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width:100%;
height : 100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
background: rgb(50,47,99);
background: linear-gradient(90deg, rgba(50,47,99,1) 33%, rgba(44,22,80,1) 47%, rgba(24,27,89,1) 53%, rgba(50,19,68,1) 100%, rgba(103,74,119,1) 100%);
width:100%;
clip-path: polygon(0 0, 100% 0 , 100% 100% , 0 calc(100% -5vw));
`


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
   <ThemeProvider theme = {darkTheme}>
    <Router>
    <Navbar/>
    <Body>
      <Hero/>
      <Wrapper>
      <Skills/>
      <Experience/>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education/>
      </Wrapper>
      
      <Footer />
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    </Body>
    </Router>
   </ThemeProvider>
  );
}

export default App;
