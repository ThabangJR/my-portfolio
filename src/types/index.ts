export interface Skill {
  name: string;
  src: string;
  brand: string;
  invert?: boolean;
}

export interface LearningItem extends Skill {
  note: string;
}

export interface Project {
  num: string;
  title: string;
  role: string;
  year: string;
  desc: string;
  tags: string[];
  href: string;
  color: string;
  bg: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  side: "left" | "right";
  highlight?: boolean;
}

export interface StatItem {
  num: number;
  suffix: string;
  label: string;
}

export interface Colors {
  bg: string;
  bg2: string;
  ink: string;
  terra: string;
  forest: string;
  muted: string;
  border: string;
}
