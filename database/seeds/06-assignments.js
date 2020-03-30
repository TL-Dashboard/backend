exports.seed = function(knex) {
  return knex("assignments")
    .truncate()
    .then(function() {
      return knex("assignments").insert([
        {
          id: 1,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "User Interface I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 2,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "Git for Web Development",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 3,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "User Interface II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 4,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "User Interface III",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 5,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name:
            "Sprint Challenge - User Interface and Responsive Web Sprint Challenge",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 6,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Responsive Design I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 7,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Responsive Design II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 8,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Preprocessing I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 9,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Preprocessing II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 10,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Sprint Challenge - Advanced CSS Sprint Challenge",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 11,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 12,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 13,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript III",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 14,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript IV",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 15,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "Sprint Challenge - JavaScript Foundations Sprint Challenge",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 16,
          unit: "Web Fundamentals",
          sprint: "WEB Unit 1 Build",
          name: "WEB Unit 1 Build",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next Unit****************************
        //**************Next sprint:
        {
          id: 17,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "DOM I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 18,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "DOM II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 19,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "Components I",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 20,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "Components II",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 21,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name:
            "Sprint Challenge - Applied JavaScript Challenge",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 22,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "React Components and Component State",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 23,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Composing React Components and Passing Data Via Props",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 24,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Component Side Effects",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 25,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Advanced Styling Techniques",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 26,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Sprint Challenge - React Wars",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 27,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "React Router",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 28,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Form Management",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 29,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Advanced Form Management",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 30,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "cypress.io",
          date: "2020-03-30",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 31,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Sprint Challenge - Lambda Eats",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 32,
          unit: "Web Applications I",
          sprint: "WEB Unit 2 Build",
          name: "WEB Unit 2 Build Module",
          date: "2020-03-30",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
      ]);
    });
};
