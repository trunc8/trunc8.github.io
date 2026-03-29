export interface WorkEntry {
  title: string;
  company: string;
  image: string;
  imageAlt: string;
  date: string;
  sortDate: string;
  description: string;
  type: "work";
}

export const work: WorkEntry[] = [
  {
    title: "Robotics Machine Learning Engineer",
    company: "Tesla",
    image: "/img/work/tesla-logo.png",
    imageAlt: "Tesla",
    date: "Jul '24 - Present",
    sortDate: "2024-07",
    description:
      "Trying to understand the world through the lens of Optimus (Tesla's humanoid robot)",
    type: "work",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "The Robotics Institute, CMU, Pittsburgh, PA",
    image: "/img/work/ri-logo.png",
    imageAlt: "The Robotics Institute",
    date: "Jan '24 - May '24",
    sortDate: "2024-01",
    description:
      "Planning Techniques for Robotics (Prof. Maxim Likhachev). I TA'ed this course in my last semester at CMU. I had taken this course in the previous semester and discovered my love for robot planning. I'm sharing my joy with students and helping them get better at it",
    type: "work",
  },
  {
    title: "SDE Intern (C++ Specialist)",
    company: "Amazon Robotics, Westborough, MA",
    image: "/img/work/ar-logo.png",
    imageAlt: "Amazon Robotics",
    date: "May '23 - Aug '23",
    sortDate: "2023-05",
    description:
      "I spent my first summer in the U.S. in the lovely city of Boston. The internship was off to a rough start. During the second week, I was at my competition in London when my manager informed that he was leaving. I turned things around and delivered a terrific project by the end of the internship",
    type: "work",
  },
  {
    title: "Structuring Analyst",
    company: "Goldman Sachs, Bengaluru",
    image: "/img/work/gs-logo.png",
    imageAlt: "Goldman Sachs",
    date: "Jul '21 - Jul '22",
    sortDate: "2021-07",
    description:
      "I returned to a full-time role in the Mortgage Structuring Strategies team, Global Markets Division until I left for my Master's at CMU",
    type: "work",
  },
  {
    title: "Student Developer",
    company: "Google Summer of Code @JdeRobot",
    image: "/img/work/gsoc-logo.png",
    imageAlt: "Google Summer of Code",
    date: "Jun '21 - Aug '21",
    sortDate: "2021-06",
    description:
      "This was in the summer that I graduated from IITB. My project was titled ROS2-RADI and Amazon warehouse exercise in web-based template for ROS2. I learned about Docker, ROS2, and web servers. We deployed the project and I continued contributing till Aug '22",
    type: "work",
  },
  {
    title: "Quantitative Summer Analyst",
    company: "Goldman Sachs, Bengaluru",
    image: "/img/work/gs-logo.png",
    imageAlt: "Goldman Sachs",
    date: "May '20 - Jun '20",
    sortDate: "2020-05",
    description:
      "I interned in the Mortgage Structuring Strategies team, GMD. My project resulted in a sharp improvement in arbitrage by optimizing cash-flows through multiple derivative instruments",
    type: "work",
  },
  {
    title: "Teaching Assistant | Department of Physics",
    company: "IIT Bombay, Mumbai, India",
    image: "/img/education/iitb-logo.png",
    imageAlt: "IIT Bombay",
    date: "Jan '20 - May '20",
    sortDate: "2020-01",
    description:
      "Electricity and Magnetism (Prof. Mithun Mitra). This was in my third semester at IITB. This was a compulsory course for freshmen. I enjoyed Prof. Mithun's teaching so much, that I was keen to give back. I conducted recitations for a batch of 52 students",
    type: "work",
  },
  {
    title: "Teaching Assistant",
    company: "Department of Chemistry, IIT Bombay, Mumbai, India",
    image: "/img/education/iitb-logo.png",
    imageAlt: "IIT Bombay",
    date: "Apr '18 - May '18",
    sortDate: "2018-04",
    description:
      "Physical Chemistry (Prof. Shobhna Kapoor). This was my first summer at IITB. I was the only student in freshmen year selected to serve as a teaching assistant. I guided a class of 15 students with problem-solving skills and concepts in physical chemistry",
    type: "work",
  },
];
