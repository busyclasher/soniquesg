import React from 'react';
import { Award, UserCheck, Star, Zap } from 'lucide-react';
import { Feature, Testimonial, LessonType, Teacher } from './types';

export const SONIQUE_COLORS = {
  dark: '#231D1F',
  gold: '#c3a665',
};

export const TEACHERS: Teacher[] = [
  {
    name: "Isaac Loo",
    role: "Director & Guitar Mentor",
    qualification: "Grade 8 Distinction (Rockschool)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Senior Piano Mentor",
    qualification: "LRSM Diploma (Piano Performance)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "David Kumar",
    role: "Violin Mentor",
    qualification: "Bachelor of Music (Violin)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop"
  }
];

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'acoustic-guitar',
    title: 'Acoustic Guitar',
    description: 'Master strumming patterns, fingerstyle techniques, and the songs you love in a relaxed setting.',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop',
    instrumentValue: 'Acoustic Guitar'
  },
  {
    id: 'electric-guitar',
    title: 'Electric Guitar',
    description: 'Dive into rock, blues, and pop. Learn solos, power chords, and how to dial in your tone.',
    image: 'https://images.unsplash.com/photo-1550985616-108102f39439?q=80&w=2070&auto=format&fit=crop',
    instrumentValue: 'Electric Guitar'
  },
  {
    id: 'piano',
    title: 'Piano & Keyboard',
    description: 'From classical foundations to modern pop improvisation. Build a strong musical theory base.',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop',
    instrumentValue: 'Piano'
  },
  {
    id: 'violin',
    title: 'Violin',
    description: 'Develop proper posture, bowing techniques, and a beautiful tone with our graded curriculum.',
    image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop',
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
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Marcus Lim",
    role: "Guitar Student (16yo)",
    quote: "I wanted to learn electric guitar for my band. Isaac helped me understand the theory behind the solos I liked. The jam sessions are super fun.",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    name: "Priya Kumar",
    role: "Adult Piano Student",
    quote: "I was hesitant to start learning music in my 30s. The team at Sonique made it so accessible and stress-free. It's the highlight of my week.",
    image: "https://picsum.photos/id/338/100/100"
  }
];