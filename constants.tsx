import React from 'react';
import { Award, UserCheck, BookOpen, Wrench } from 'lucide-react';
import { Feature, Testimonial, LessonType, Teacher } from './types';
import teamIsaac from './assets/team-isaac.jpg';
import teamCelestine from './assets/Celestine.jpg';
import teamDavid from './assets/david.jpg';
import teamJoseph from './assets/joseph.jpg';
import lessonGuitar from './assets/guitar.jpg';
import lessonPiano from './assets/piano-lesson.jpg';
import lessonViolin from './assets/playing-violin.jpg';

export const SONIQUE_COLORS = {
  dark: '#231D1F',
  gold: '#c3a665',
};

export const TEACHERS: Teacher[] = [
  {
    name: 'Isaac Loo',
    role: 'Guitar Teacher',
    credentials: [
      'Trinity Grade 8 (Rock & Pop Guitar)',
    ],
    location: 'Novena (Central)',
    image: teamIsaac,
  },
  {
    name: 'Joseph Law',
    role: 'Piano Teacher',
    credentials: [
      'LRSM Diploma (Piano Performance)',
      'ABRSM Grade 8 (Piano Performance)',
    ],
    location: 'Farrer Park (Central)',
    image: teamJoseph,
  },
  {
    name: 'Celestine Sheum',
    role: 'Violin Teacher',
    credentials: ['Bachelor of Music (Violin)', 'Trinity Diploma (ATCL Violin)'],
    location: 'Katong (East)',
    image: teamCelestine,
  },
  {
    name: 'David Prinz',
    role: 'Guitar Teacher',
    credentials: ['ABRSM Grade 8 (Guitar)', 'Diploma in SP Sound & Music'],
    location: 'Serangoon (North-East)',
    image: teamDavid,
  },
];

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'guitar',
    title: 'Guitar',
    description:
      'Play songs you already enjoy, while building the control and accuracy to perform them on both acoustic and electric guitar.',
    image: lessonGuitar,
    instrumentValue: 'Guitar',
  },
  {
    id: 'violin',
    title: 'Violin',
    description:
      'Learn proper posture, bowing, and tone through structured lessons, laying a strong foundation for steady and expressive playing.',
    image: lessonViolin,
    instrumentValue: 'Violin',
  },
  {
    id: 'piano',
    title: 'Piano',
    description:
      'Explore contemporary styles like pop and worship. Gain the ability to play, accompany, and improvise on both piano and keyboard.',
    image: lessonPiano,
    instrumentValue: 'Piano',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Annual Recital Opportunities',
    tagline: 'Step onto the stage',
    description:
      'Develop musicianship and confidence through each performance milestone',
    icon: <Award className="w-8 h-8 text-[#c3a665]" />,
  },
  {
    title: 'Qualified Teachers',
    description:
      'All our teachers are minimally certified at the Grade 8 or tertiary level for structured, expert guidance.',
    icon: <UserCheck className="w-8 h-8 text-[#c3a665]" />,
  },
  {
    title: 'Guided Progression',
    description:
      'Learn from teachers who provide clear direction and adapt each lesson to the student’s pace and goals, with regular progress updates',
    icon: <BookOpen className="w-8 h-8 text-[#c3a665]" />,
  },
  {
    title: 'The right setup at every stage',
    description:
      'We guide you in choosing the right instrument so you don’t have to worry about buying the wrong one. Enjoy maintenance services and exclusive discounts',
    icon: <Wrench className="w-8 h-8 text-[#c3a665]" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dushan Silva',
    role: 'Parent of Rachel (6yo)',
    quote:
      'Great to see teacher have all the necessary qualities and skills to make my child feel excited to go back to guitar lessons and she able to learn fast',
  },
  {
    name: 'Bee Huay',
    role: 'Parent of Eclaire (13yo)',
    quote:
      'Isaac is a patient and talented teacher and his place is conducive to learning, with a suite of different guitars you can experiment. My girl benefits a lot from his guidance',
  },
  {
    name: 'Adeline Chang',
    role: 'Parent of Bosco (15yo)',
    quote:
      'Coach Isaac is a really great guitar teacher! Extremely patient and versatile to learning any song on request, and is able to understand and teach many different ways to play the guitar faster and better, even for a beginner! That’s the feedback that I get from my son, and he is enjoying every single lesson that he went for the past few months',
  },
  {
    name: 'Dorcas Wang',
    role: 'Adult Piano Student (24yo)',
    quote:
      'Joseph is a highly patient and encouraging keyboard and piano teacher who tailors each lesson to suit each individual\'s ability and pace of learning. His classes are not overwhelming. You leave learning something new each class. He is also very encouraging and focuses a lot on helping students develop their own musical style rather than following a standardised approach.',
  },
];
