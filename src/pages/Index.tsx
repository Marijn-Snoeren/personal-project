import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Reviews } from '@/components/Reviews';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

function Index() {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
