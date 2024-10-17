export type contentType = {
    id: number;
    title: string;
    course: string;
    eligibility: string;
    duration: string;
    description: string;
    image: string;
    brochure: string;
};

export const content: contentType[] = [
    {
        id: 1,
        title: "REGULAR (6-10)",
        course: "SCIENCE, ARTS AND COMMERCE",
        image: "/images/s1.jpg",
        eligibility: "VI AND X",
        duration: "APRIL (PRESENT YEAR) TO FEBRUARY (NEXT YEAR)",
        description:
            " This comprehensive course offers an interdisciplinary curriculum tailored to students in Grades VI and X, covering key concepts in Science, Arts, and Commerce. Designed to build a strong foundation, the program blends theoretical knowledge with practical insights, preparing students for advanced studies and diverse career pathways. ",
        brochure: "#",
    },
    {
        id: 2,
        title: "REGULAR (10-12 ICSE AND CBSE)",
        course: "SCIENCE, ARTS AND COMMERCE",
        image: "/images/s2.jpg",
        eligibility: "X AND XII",
        duration: "APRIL TO NOVEMBER OF THE SAME YEAR",
        description:
            "This course takes an innovative approach to education, featuring hands-on experience in state-of-the-art labs. Students gain the skills needed for various industries, combining theoretical knowledge with practical application to prepare for future challenges.",
        brochure: "#",
    },
    {
        id: 3,
        title: "CRASH COURSE (ICSE AND CBSE)",
        course: "SCIENCE, ARTS AND COMMERCE",
        image: "/images/s3.jpg",
        eligibility: "X AND XII",
        duration: "DECEMBER (1ST WEEK) TO FEBRUARY OF NEXT YEAR (1ST WEEK)",
       
        description:
            "A condensed, intensive program that emphasizes research and practical knowledge. The curriculum is crafted to cultivate scientific curiosity and enhance analytical skills, equipping students with the tools needed to excel in their studies and beyond.",
        brochure: "#",
    },
    
  
    {
      id: 4,
      title: "JEE EXAM",
      course: "JEE MAIN & ADVANCED",
      image:"/images/s4.jpg",
      eligibility: "12th pass",
      duration: "3 years",
      
      description:
        "This comprehensive 3-year program is tailored for students who have completed their 12th grade and are aiming to crack both JEE Main and Advanced exams. The course offers in-depth preparation, covering all essential topics, concepts, and strategies to help students achieve top ranks in India's premier engineering entrance exams.",
        brochure:"/images/Arihant Differential Calculus_unlocked.pdf",
    },
    {
        id: 5,
        title: "NEET EXAM",
        course: "NEET ENTRANCE EXAM",
        image:"/images/s5.jpg",
        eligibility: "12th pass",
        duration: "3 years",
        
        description:
          "This comprehensive program is tailored for students who have completed their 12th grade and are aiming to crack both Neet Entrance Exam. The course offers in-depth preparation, covering all essential topics, concepts, and strategies to help students achieve top ranks in India's premier engineering entrance exams.",
          brochure:"",
      },
      {
        id: 6,
        title: "Foundation Course",
        course: "Foundation Course",
        image:"/images/s6.png",
        eligibility: "12th pass",
        duration: "1 month",
        
        description:
          "Focus on research and practical knowledge, with a curriculum designed to foster scientific curiosity and analytical skills in students.This course will have classes for 9/10 and 10/12 with Math and Science",
          brochure:"",
      },

];
