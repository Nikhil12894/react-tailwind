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
    imageUrl: "src/assets/images/nalin1.jpeg",
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
        bulletPoints: ["Completed TMT Badge."],
        projects: {
          title: "Major Projects Handled",
          projects: [
            {
              title: "OEM PowerFlex Plug-in",
              description:
                "The plug-in helps view and monitor the PowerFlex components associated with the Oracle databases managed by Oracle Enterprise manager. It maps the Oracle databases with PowerFlex SDC nodes. Oracle Enterprise Manager users can analyze the performance of the volumes, SDC nodes, and alerts.",
            },
            {
              title: "Order Fulfillment and Verification System",
              description:
                "It was a event driven architecture based <bold>Spring-Boot</bold> <bold>Micro-Service</bold> deployed on <bold>kubernetes cluster</bold> which uses <bold>RabbitMQ</bold> as message broker. It was responsible for validating the order by different Type, Location etc. .Providing the order status to the different system which are waiting for the status by transforming the data according to the need of destination system and also store the event log in <bold>casandra</bold> database.",
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
          "Worked on multiple technology like <bold>REST-API</bold>, <bold>JPA</bold>, <bold>Servlets</bold>, <bold>Angular</bold>.",
        ],
        projects: {
          title: "Major Projects Handled",
          projects: [
            {
              title: "ATS",
              description:
                "This is basically a job scheduling app consisting of ATS-service, consumer, producer architecture and <bold>Apache ActiveMQ</bold>. ATS service is responsible for scheduling the job and reporting,producer is responsible for pushing the packet to queue,consumer is responsible for fetching the data from queue and performing the actual job based on the data.",
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
};
