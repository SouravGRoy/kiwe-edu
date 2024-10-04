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
        eligibility: "IX AND XI",
        duration: "APRIL (PRESENT YEAR) TO FEBRUARY (NEXT YEAR)",
        description:
            "This website features a sophisticated color palette infused with metallic accents, layered over a blue-toned gradient that creates a stylish 3D effect. This design choice enhances Shopify's product updates, fostering a serene atmosphere that sparks curiosity in viewers.",
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
            "An innovative approach to technology education with hands-on experience and modern labs, providing students with the skills needed for the tech industry.",
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
            "Focus on research and practical knowledge, with a curriculum designed to foster scientific curiosity and analytical skills in students.",
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
        id: 5,
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
