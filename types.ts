import React from 'react';

export interface Teacher {
  name: string;
  role: string;
  qualification: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LessonType {
  id: string;
  title: string;
  description: string;
  image: string;
  instrumentValue: string; // value to pass to planner
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
  image: string;
}