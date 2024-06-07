export const data = {
  header: {
    name: "NALIN KUMAR",
    title: "Java Full stack Developer",
    email: "nalin12894@gmail.com",
    phone: "+917876419354",
    location: "Noida, India",
    gitHub: {
      href: "https://github.com/Nikhil12894",
      displayName: "Nikhil12894",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/nalin-k-31564010a/",
      displayName: "nalin-k-31564010a",
    },
    imageUrl: "images/nalin1.jpeg",
  },
  workExp: {
    title: "WORK EXPERIENCE",
    positions: [
      {
        jobTitle: "Senior Technology Consultant",
        compony: {
          href: "",
          displayName: "Ernst & Young LLP.",
        },
        dates: {
          start: "March 2022",
          end: "Present",
        },
        location: "Noida, India",
        bulletPoints: [
          "Completed TMT Badge.",
          "Completed Kubernetes for the Absolute Beginners - Hands-on Tutorial",
        ],
        projects: {
          title: "Major Projects Handled",
          projects: [
            {
              title: "Order Management System ( Dell )",
              description:
                "It was a event driven architecture based Spring-Boot Micro-Service deployed on kubernetes cluster which uses RabbitMQ as message broker. It was responsible for validating the order by different Type, Location etc. .Providing the order status to the different system which are waiting for the status by transforming the data according to the need of destination system and also store the event log in casandra database.",
            },
            {
              title: "Bookings Microservice ( VMWare )",
              description:
                "To distribute a percentage of there total sales for product and services. Developed multiple Micro-services using spring boot and spring-data-JDBC and exposed various end point in Restful manner and deployed on Kubernetes cluster. Paired with team member to developed reusable library which act as foundation for other micro-service.",
            },
            {
              title: "OEM PowerFlex Plug-in ( Dell )",
              description:
                "The plug-in helps view and monitor the PowerFlex components associated with the Oracle databases managed by Oracle Enterprise manager. It maps the Oracle databases with PowerFlex SDC nodes. Oracle Enterprise Manager users can analyze the performance of the volumes, SDC nodes, and alerts.",
            },
          ],
        },
      },
      {
        jobTitle: "Jr. Java Developer",
        compony: {
          href: "",
          displayName: "ANR Software Pvt. Ltd.",
        },
        dates: {
          start: "July 2018",
          end: "March 2022",
        },
        location: "Noida, India",
        bulletPoints: [
          "Developed and implemented tools which increased the level of automation and efficiency of apps.",
          "Developed and Deployed multiple consumers based on requirement.",
          "Tested and updated existing software using own knowledge and expertise.",
          "Worked on multiple technology like REST-API, JPA, Servlets, Angular.",
        ],
        projects: {
          title: "Major Projects Handled",
          projects: [
            {
              title: "ATS",
              description:
                "This is basically a job scheduling app consisting of ATS-service, consumer, producer architecture and Apache ActiveMQ. ATS service is responsible for scheduling the job and reporting,producer is responsible for pushing the packet to queue,consumer is responsible for fetching the data from queue and performing the actual job based on the data.",
            },
            {
              title: "Alert-Dashboard",
              description:
                "An infrastructure project which is used for monitoring all the apps.Wrote the code to make this dashboard more generic.",
            },
            {
              title: "Global-Assets",
              description:
                "An infrastructure project with central repository for all the configuration like server, context, database,schema and all the global configuration which doesn’t changes frequently.",
            },
          ],
        },
      },
    ],
  },
  education: {
    title: "EDUCATION",
    schools: [
      {
        school: "Golgothas University",
        degree: "M.Tech Communication Engineering",
        dates: "2016 - 2018",
        location: "Greater Noida, India",
        gpa: "CGPA: 7.72/10",
      },
      {
        degree: "B.Tech Electrical and Communication Engineering",
        school: "Punjab Technical University",
        dates: "2011 - 2015",
        location: "Jalandhar, India",
        gpa: "%: 68.5",
      },
    ],
  },
  summery: {
    title: "SUMMERY",
    points: [
      "Enthusiastic and reliable Java Developer with experience in agile software development methodologies.",
      "5+ years of industry experience as part of a computer program development team and strong experience in Back-End web Development.",
      "Drove ATS project that resulted in the execution of most of the time based scheduling task to be executed through it",
    ],
  },
  certifications: {
    title: "CERTIFICATIONS",
    certifications: [
      {
        name: "6-month internship",
        compony: "TCIL",
        dates: "JULY 2014-DECEMBER 14",
        location: "Chandigarh, India",
        points: ["Completed certification in core Java and Basic HTML."],
      },
      {
        name: "45 days summer Training",
        compony: "C-DAC",
        dates: "2013",
        location: "Mohali, India",
        points: [
          "This training is based on embedded system, 8051 microcontrollers Architecture, assembly language programming of 8051 microcontrollers and interfacing",
        ],
      },
    ],
  },
  skills: {
    title: "SKILLS",
    skills: [
      {
        name: "Java",
        level: 4,
      },
      {
        name: "Spring Boot",
        level: 3,
      },
      {
        name: "Quarkus",
        level: 2,
      },
      {
        name: "JPA",
        level: 4,
      },
      {
        name: "Hibernate",
        level: 2,
      },
      {
        name: "Rest API",
        level: 4,
      },
      {
        name: "Kubernetes",
        level: 2,
      },
      {
        name: "Docker",
        level: 3,
      },
      {
        name: "Go",
        level: 2,
      },
      {
        name: "SQL",
        level: 2,
      },
      {
        name: "Angular",
        level: 3,
      },
      {
        name: "NodeJs",
        level: 2,
      },
      {
        name: "React",
        level: 3,
      },
      {
        name: "Git",
        level: 3,
      },
      {
        name: "Jenkins",
        level: 2,
      },
      {
        name: "Junit 5",
        level: 4,
      },
    ],
  },
  languages: {
    title: "LANGUAGES",
    languages: [
      {
        name: "English",
        level: 4,
      },
      {
        name: "Hindi",
        level: 5,
      },
    ],
  },
  strengths: {
    title: "STRENGTHS",
    strengths: [
      "Hard-working",
      "Time Management",
      "Target oriented",
      "Team player",
      "Flexibility and Adaptability",
    ],
  },
};
