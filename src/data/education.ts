export interface EducationEntry {
  title: string;
  company: string;
  image: string;
  imageAlt: string;
  date: string;
  sortDate: string;
  description: string;
  type: "education";
}

export const education: EducationEntry[] = [
  {
    title: "M.S. in Robotic Systems Development",
    company: "Carnegie Mellon University, Pittsburgh, PA",
    image: "/img/education/cmu-logo.png",
    imageAlt: "Carnegie Mellon University",
    date: "Aug '22 - May '24",
    sortDate: "2022-08",
    description:
      "Awarded the prestigious J.N. Tata scholarship. Student representative of the MRSD cohort. Represented CMU at ICRA '23 in Quadruped Robot Challenge (3rd Prize)",
    type: "education",
  },
  {
    title: "Sakura Research Exchange",
    company: "Hiroshima University, Japan",
    image: "/img/education/hu-logo.png",
    imageAlt: "Hiroshima University",
    date: "Jun '19",
    sortDate: "2019-06",
    description:
      "My visit was under the Sakura Research Exchange Programme spanning a week. I was among 15 students from India to be awarded the Sakura Science Plan scholarship '19 from Japan Science & Technology Agency",
    type: "education",
  },
  {
    title: "B.Tech in Mechanical Engineering",
    company: "IIT Bombay, India",
    image: "/img/education/iitb-logo.png",
    imageAlt: "IIT Bombay",
    date: "Jul '17 - Aug '21",
    sortDate: "2017-07",
    description:
      "Citation award for technical excellence. Department rank 5 in Mechanical Engineering. Founded and led a student technical quadruped robot team. Highest number of projects in the graduating batch. Achieved All India Rank 698 in JEE Advanced 2017 (~99.7 percentile, it's a lot of people)",
    type: "education",
  },
];
