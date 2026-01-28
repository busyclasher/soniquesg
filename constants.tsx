import React from 'react';
import { Award, UserCheck, Star, Zap } from 'lucide-react';
import { Feature, Testimonial, LessonType, Teacher } from './types';
import photoDuo from './assets/photo_2026-01-28_17-50-48.jpg';
import photoClassical from './assets/photo_2026-01-28_17-50-53.jpg';
import photoKeyboard from './assets/photo_2026-01-28_17-50-55.jpg';
import photoStage from './assets/photo_2026-01-28_17-50-56.jpg';

export const SONIQUE_COLORS = {
  dark: '#231D1F',
  gold: '#c3a665',
};

export const TEACHERS: Teacher[] = [
  {
    name: "Isaac Loo",
    role: "Director & Guitar Mentor",
    qualification: "Grade 8 Distinction (Rockschool)",
    image: photoStage
  },
  {
    name: "Sarah Chen",
    role: "Senior Piano Mentor",
    qualification: "LRSM Diploma (Piano Performance)",
    image: photoKeyboard
  },
  {
    name: "David Kumar",
    role: "Violin Mentor",
    qualification: "Bachelor of Music (Violin)",
    image: photoDuo
  },
  {
    name: "Amelia Tan",
    role: "Classical Guitar Mentor",
    qualification: "ABRSM Grade 8 (Guitar)",
    image: photoClassical
  }
];

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'acoustic-guitar',
    title: 'Acoustic Guitar',
    description: 'Master strumming patterns, fingerstyle techniques, and the songs you love in a relaxed setting.',
    image: photoClassical,
    instrumentValue: 'Acoustic Guitar'
  },
  {
    id: 'electric-guitar',
    title: 'Electric Guitar',
    description: 'Dive into rock, blues, and pop. Learn solos, power chords, and how to dial in your tone.',
    image: photoStage,
    instrumentValue: 'Electric Guitar'
  },
  {
    id: 'piano',
    title: 'Piano & Keyboard',
    description: 'From classical foundations to modern pop improvisation. Build a strong musical theory base.',
    image: photoKeyboard,
    instrumentValue: 'Piano'
  },
  {
    id: 'violin',
    title: 'Violin',
    description: 'Develop proper posture, bowing techniques, and a beautiful tone with our graded curriculum.',
    image: photoDuo,
    instrumentValue: 'Violin'
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
    image: photoDuo
  },
  {
    name: "Marcus Lim",
    role: "Guitar Student (16yo)",
    quote: "I wanted to learn electric guitar for my band. Isaac helped me understand the theory behind the solos I liked. The jam sessions are super fun.",
    image: photoClassical
  },
  {
    name: "Priya Kumar",
    role: "Adult Piano Student",
    quote: "I was hesitant to start learning music in my 30s. The team at Sonique made it so accessible and stress-free. It's the highlight of my week.",
    image: photoKeyboard
  }
];
