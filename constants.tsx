import React from 'react';
import { Award, UserCheck, Star, Zap } from 'lucide-react';
import { Feature, Testimonial, LessonType, Teacher } from './types';
import teamIsaac from './assets/team-isaac.jpg';
import teamCelestine from './assets/Celestine.jpg';
import teamDavid from './assets/david.jpg';
import teamJoseph from './assets/joseph.jpg';
import lessonAcoustic from './assets/jamming-sesh.jpg';
import lessonElectric from './assets/guitar.jpg';
import lessonPiano from './assets/piano-lesson.jpg';
import lessonViolin from './assets/playing-violin.jpg';

export const SONIQUE_COLORS = {
  dark: '#231D1F',
  gold: '#c3a665',
};

export const TEACHERS: Teacher[] = [
  {
    name: "Isaac Loo",
    role: "Director & Guitar Teacher",
    qualification: "Grade 8 Distinction (Rockschool)",
    image: teamIsaac
  },
  {
    name: "Joseph Law",
    role: "Senior Piano Teacher",
    qualification: "LRSM Diploma (Piano Performance)",
    image: teamJoseph
  },
  {
    name: "Celestine",
    role: "Violin Teacher",
    qualification: "Bachelor of Music (Violin)",
    image: teamCelestine
  },
  {
    name: "David Prinz",
    role: "Classical Guitar Teacher",
    qualification: "ABRSM Grade 8 (Guitar)",
    image: teamDavid
  }
];

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'acoustic-guitar',
    title: 'Acoustic Guitar',
    description: 'Master strumming patterns, fingerstyle techniques, and the songs you love in a relaxed setting.',
    image: lessonAcoustic,
    instrumentValue: 'Acoustic Guitar',
    price: 'From $35 / lesson',
    popular: true,
  },
  {
    id: 'electric-guitar',
    title: 'Electric Guitar',
    description: 'Dive into rock, blues, and pop. Learn solos, power chords, and how to dial in your tone.',
    image: lessonElectric,
    instrumentValue: 'Electric Guitar',
    price: 'From $35 / lesson',
  },
  {
    id: 'piano',
    title: 'Piano & Keyboard',
    description: 'From classical foundations to modern pop improvisation. Build a strong musical theory base.',
    image: lessonPiano,
    instrumentValue: 'Piano',
    price: 'From $40 / lesson',
  },
  {
    id: 'violin',
    title: 'Violin',
    description: 'Develop proper posture, bowing techniques, and a beautiful tone with our graded curriculum.',
    image: lessonViolin,
    instrumentValue: 'Violin',
    price: 'From $40 / lesson',
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Annual Recital Opportunities",
    description: "Hone musicianship and gain confidence on stage through our organized performances.",
    icon: <Award className="w-8 h-8 text-[#c3a665]" />
  },
  {
    title: "Qualified Teachers",
    description: "All our teachers are minimally certified at the Grade 8 or tertiary level for structured, expert guidance.",
    icon: <UserCheck className="w-8 h-8 text-[#c3a665]" />
  },
  {
    title: "Continuous Mentorship",
    description: "Learning does not end after class. Feel free to ask our teachers anything and receive continuous updates!",
    icon: <Zap className="w-8 h-8 text-[#c3a665]" />
  },
  {
    title: "Exclusive Discounts",
    description: "Enjoy special rates when choosing our services and musical products.",
    icon: <Star className="w-8 h-8 text-[#c3a665]" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Tan",
    role: "Parent of Caleb (9yo)",
    quote: "We struggled to find a teacher who could keep Caleb interested. Sonique's approach to mixing pop songs with proper technique changed everything. He actually practices on his own now!",
    image: teamCelestine
  },
  {
    name: "Marcus Lim",
    role: "Guitar Student (16yo)",
    quote: "I wanted to learn electric guitar for my band. Isaac helped me understand the theory behind the solos I liked. The jam sessions are super fun.",
    image: teamDavid
  },
  {
    name: "Priya Kumar",
    role: "Adult Piano Student",
    quote: "I was hesitant to start learning music in my 30s. The team at Sonique made it so accessible and stress-free. It's the highlight of my week.",
    image: teamJoseph
  }
];
