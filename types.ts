import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tagline?: string;
}

export interface LessonType {
  id: string;
  title: string;
  description: string;
  image: string;
  instrumentValue: string; // value to pass to planner
  popular?: boolean;
}

export interface LessonPlanRequest {
  age: string;
  instrument: string;
  goal: string; // Changed to free text
}

export interface GeneratedPlan {
  title: string;
  overview: string;
  weeks: {
    week: number;
    focus: string;
    activity: string;
    keyConcepts: string[];
    practiceExercises: string[];
    outcomes: string;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Teacher {
  name: string;
  role: string;
  credentials: string[];
  location: string;
  image: string;
}