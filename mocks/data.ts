import { TopicSection } from "@/app/types/lesson";
import student from "@/public/student.png";
import teacher from "@/public/teacher.png";
export const mockStudentProfile = {
  name: "Marilyn",
  avatar: student.src,
  level: 3,
  code: "YKNKH",
  role: "student" as const,
  stats: {
    dayStreak: 3,
    topFinishes: 0,
    gems: 6,
  },
  achievements: [
    { id: "1", name: "Scholar", isUnlocked: false, remainingCount: 5 },
    { id: "2", name: "Expert", isUnlocked: false },
    { id: "3", name: "Leader", isUnlocked: false },
  ],
};

export const mockTeacherProfile = {
  name: "Mr. Smith",
  avatar: teacher.src,
  code: "TCHR1",
  role: "teacher" as const,
  subject: "Science",
  students: 25,
};

export const mockTeacherLessons = [
  {
    id: "1",
    title: "Basic Physics",
    description: "Introduction to physics",
    subject: "Science",
    studentResponses: 8,
    lastUpdated: new Date(),
  },
  {
    id: "2",
    title: "Solar Systems",
    description: "Learn about our solar system",
    subject: "Science",
    studentResponses: 15,
    lastUpdated: new Date(),
  },
];

export const levels = [
  { level: 1, multiplier: 2, isUnlocked: true },
  { level: 2, multiplier: 4, isUnlocked: true },
  { level: 3, multiplier: 6, isUnlocked: true },
  { level: 4, multiplier: 8, isUnlocked: false },
  { level: 5, multiplier: 10, isUnlocked: false },
  { level: 6, multiplier: 1, isUnlocked: false },
];

export const sampleQuestions = [
  "What exactly is force ?",
  "How does force make objects start or stop moving?",
  "What does it mean when forces are balanced or unbalanced?",
  "How do you measure force?",
];

// Mock topics for demonstration
export const mockTopics: TopicSection[] = [
  {
    id: "1",
    title: "Introduction to basic physics",
    content: `This lesson will cover the basics of physics, including motion, force, and energy. \n\n
    Motion is the change in position of an object over time. \n\n
    Force is the push or pull on an object that causes it to move or change direction. \n\n
    Energy is the ability to do work. \n\n
    `,
    pageNumber: 1,
  },
  {
    id: "2",
    title: "Force",
    content: `Force is the push or pull on an object that causes it to move or change direction. \n\n
    There are two types of force: contact force and non-contact force. \n\n
    Contact force is a force that requires physical contact between two objects. \n\n
    Non-contact force is a force that does not require physical contact between two objects. \n\n
    `,
    pageNumber: 2,
  },
  {
    id: "3",
    title: "Collision",
    content: `A collision is a force that occurs when two objects collide. \n\n
    Collisions can be elastic or inelastic. \n\n
    Elastic collisions are collisions in which the objects bounce off each other. \n\n
    Inelastic collisions are collisions in which the objects stick together. \n\n
    `,
    pageNumber: 3,
  },
];

export const mockLessons = [
  {
    id: "1",
    title: "Basic Physics",
    description: "Introduction to physics concepts",
    subject: "Science",
    lastUpdated: new Date(),
    studentResponses: 0,
    isLocked: false,
  },
  {
    id: "2",
    title: "Solar Systems",
    description: "Learn about our solar system",
    subject: "Science",
    lastUpdated: new Date(),
    studentResponses: 0,
    isLocked: false,
  },

  {
    id: "3",
    title: "Chemistry 101",
    description: "Fundamentals of chemistry",
    subject: "Science",
    lastUpdated: new Date(),
    studentResponses: 0,
    isLocked: true,
  },
];

export const mockARPrompts = {
  Force: "3D simulation of falling balls with different force impact",
  Collision:
    "3D simulation of two objects hitting each other showing impact of collision",
  Gravity: "3D visualization of objects falling at different speeds",
  Motion: "3D representation of objects moving with different velocities",
  Energy: "3D visualization of potential and kinetic energy transformation",
  Momentum: "3D demonstration of conservation of momentum in collisions",
  "Solar System": "3D model of planets orbiting around the sun",
  default: "3D interactive visualization of ",
};

// Add lesson-specific topics
export const mockTopicsByLesson: Record<string, TopicSection[]> = {
  "Basic Physics": [
    {
      id: "1",
      title: "Introduction to basic physics",
      content: `This lesson will cover the basics of physics, including motion, force, and energy. \n\n
    Motion is the change in position of an object over time. \n\n
    Force is the push or pull on an object that causes it to move or change direction. \n\n
    Energy is the ability to do work. \n\n
    `,
      pageNumber: 1,
    },
    {
      id: "2",
      title: "Force",
      content: `Force is the push or pull on an object that causes it to move or change direction. \n\n
    There are two types of force: contact force and non-contact force. \n\n
    Contact force is a force that requires physical contact between two objects. \n\n
    Non-contact force is a force that does not require physical contact between two objects. \n\n
    `,
      pageNumber: 2,
    },
    {
      id: "3",
      title: "Collision",
      content: `A collision is a force that occurs when two objects collide. \n\n
    Collisions can be elastic or inelastic. \n\n
    Elastic collisions are collisions in which the objects bounce off each other. \n\n
    Inelastic collisions are collisions in which the objects stick together. \n\n
    `,
      pageNumber: 3,
    },
  ],
  "Solar Systems": [
    {
      id: "1",
      title: "Introduction to Solar System",
      content: `This lesson will cover the basics of the solar system, including planets, moons, and stars. \n\n
    The solar system consists of the Sun and celestial objects. \n\n
    The Sun is the center of the solar system. \n\n
    The planets are the objects that orbit the Sun. \n\n
    `,
      pageNumber: 1,
    },
    {
      id: "2",
      title: "Planets",
      content: `There are eight planets in our solar system. \n\n
    The planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. \n\n
    `,
      pageNumber: 2,
    },
  ],
  "Chemistry 101": [
    {
      id: "1",
      title: "Atoms and Molecules",
      content: `Atoms are the basic units of matter. \n\n
    Molecules are groups of atoms that are bonded together. \n\n
    `,
      pageNumber: 1,
    },
    {
      id: "2",
      title: "Chemical Reactions",
      content: `Chemical reactions occur when substances combine. \n\n
    Chemical reactions can be exothermic or endothermic. \n\n
    Exothermic reactions release energy. \n\n
    Endothermic reactions absorb energy. \n\n
    `,
      pageNumber: 2,
    },
  ],
};

// Sample questions and responses by topic
export const mockQuestionsAndResponses: Record<
  string,
  {
    suggestedQuestions: string[];
    sampleResponses: Record<string, string>;
  }
> = {
  Force: {
    suggestedQuestions: [
      "What exactly is force?",
      "How does force make objects start or stop moving?",
      "What does it mean when forces are balanced or unbalanced?",
      "How do you measure force?",
    ],
    sampleResponses: {
      "measure force":
        "Force is measured using a unit called the newton (N). You can measure force with a spring scale, which stretches when a force is applied. One newton is the amount of force needed to make a 1-kilogram object speed up by 1 meter per second every second.",
      force:
        "Force is a push or pull that can change the motion of an object. It can make things move, stop moving, or change direction.",
      balanced:
        "When forces are balanced, they cancel each other out. This means that the object will not move.",

      default:
        "Could you please be more specific about what you'd like to know about basic physics?",
    },
  },
  Collision: {
    suggestedQuestions: [
      "What is the difference between an elastic and an inelastic collision?",
      "How does the principle of conservation of momentum explain what happens during a collision?",
      "In what ways do factors like mass and speed affect the outcome of a collision?",
      "What are the different types of collision?",
    ],
    sampleResponses: {
      "types of collision":
        "There are two main types of collisions. In an elastic collision, objects bounce off each other and keep all their energy, but in an inelastic collision, some energy is lost and the objects might even stick together.",
      inelastic:
        "In an inelastic collision, some energy is lost and the objects might even stick together.",
      "principle of conservation of momentum":
        "The principle of conservation of momentum states that the total momentum of a system remains constant if no external forces act on it.",
      default:
        "Could you please be more specific about what you'd like to know about collisions?",
    },
  },
  "Solar Systems": {
    suggestedQuestions: [
      "What are the planets in our solar system?",
      "How does gravity affect planetary motion?",
      "What is the difference between a planet and a dwarf planet?",
      "Why is the Sun important for our solar system?",
    ],
    sampleResponses: {
      planets:
        "There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. They all orbit around the Sun.",
      sun: "The Sun is the center of our solar system and provides light and heat to all the planets. It contains 99.8% of all the mass in our solar system.",
      default:
        "Could you please be more specific about what you'd like to know about the solar system?",
    },
  },
};

// Add game links to topics
export const topicGameLinks: Record<string, string> = {
  Force: "https://pelumiabiola.8thwall.app/force-lesson/",
  Collision: "https://pelumiabiola.8thwall.app/secondphysics/",
  "Introduction to Solar System": "https://michaelborg.8thwall.app/earth-moon/",
  "Planets": "https://michaelborg.8thwall.app/earth-moon/",
  default: "https://pelumiabiola.8thwall.app/force-lesson/", // fallback URL
};
