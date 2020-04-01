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
          due: "2020-03-30",
          url: "https://learn.lambdaschool.com/web1/module/recl0IyzS2Vl89lZa",
          type: "module",
          cohort_id: 1
        },
        {
          id: 2,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "Git for Web Development",
          due: "2020-03-30",
          url: "https://learn.lambdaschool.com/web1/module/rect59e95N6OSvoCd",
          type: "module",
          cohort_id: 1
        },
        {
          id: 3,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "User Interface II",
          due: "2020-03-30",
          url: "https://learn.lambdaschool.com/web1/module/recGvXyWT6AvGtMHR",
          type: "module",
          cohort_id: 1
        },
        {
          id: 4,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name: "User Interface III",
          due: "2020-03-30",
          url: "https://learn.lambdaschool.com/web1/module/recaVbBZhh8BTyMdM/",
          type: "module",
          cohort_id: 1
        },
        {
          id: 5,
          unit: "Web Fundamentals",
          sprint: "User Interface and Git",
          name:
            "Sprint Challenge - User Interface and Responsive Web Sprint Challenge",
          due: "2020-03-30",
          url: "https://github.com/LambdaSchool/Sprint-Challenge--User-Interface",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 6,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Responsive Design I",
          due: "2020-03-31",
          url: "https://learn.lambdaschool.com/web1/module/recuDrqSGpWcepCMs",
          type: "module",
          cohort_id: 1
        },
        {
          id: 7,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Responsive Design II",
          due: "2020-03-31",
          url: "https://learn.lambdaschool.com/web1/module/recE3IqPtDxaVI0DW",
          type: "module",
          cohort_id: 1
        },
        {
          id: 8,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Preprocessing I",
          due: "2020-03-31",
          url: "https://learn.lambdaschool.com/web1/module/reculyBhIYkuoBRqh",
          type: "module",
          cohort_id: 1
        },
        {
          id: 9,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Preprocessing II",
          due: "2020-03-31",
          url: "https://learn.lambdaschool.com/web1/module/rec1hRu3bO6L0uxn2",
          type: "module",
          cohort_id: 1
        },
        {
          id: 10,
          unit: "Web Fundamentals",
          sprint: "Advanced CSS",
          name: "Sprint Challenge - Advanced CSS Sprint Challenge",
          due: "2020-03-31",
          url: "https://github.com/LambdaSchool/Sprint-Challenge--Advanced-CSS",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 11,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript I",
          due: "2020-04-01",
          url: "https://learn.lambdaschool.com/web1/module/recCT3KJYTIRYwQMh",
          type: "module",
          cohort_id: 1
        },
        {
          id: 12,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript II",
          due: "2020-04-01",
          url: "https://learn.lambdaschool.com/web1/module/rec1oaBmEoSilO2yf",
          type: "module",
          cohort_id: 1
        },
        {
          id: 13,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript III",
          due: "2020-04-01",
          url: "https://learn.lambdaschool.com/web1/module/rec0AWuNLezbpit7m",
          type: "module",
          cohort_id: 1
        },
        {
          id: 14,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "JavaScript IV",
          due: "2020-04-01",
          url: "https://learn.lambdaschool.com/web1/module/recyS588eOvVUKAMc",
          type: "module",
          cohort_id: 1
        },
        {
          id: 15,
          unit: "Web Fundamentals",
          sprint: "JavaScript Fundamentals",
          name: "Sprint Challenge - JavaScript Foundations Sprint Challenge",
          due: "2020-04-01",
          url: "https://github.com/LambdaSchool/Sprint-Challenge--JavaScript",
          type: "sprint",
          cohort_id: 1
        },
        //**************Next sprint:
        {
          id: 16,
          unit: "Web Fundamentals",
          sprint: "WEB Unit 1 Build",
          name: "WEB Unit 1 Build",
          due: "2020-04-02",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
//**********************Next Unit****************************
        //**************Next sprint:
        {
          id: 17,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "DOM I",
          due: "2020-04-03",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 18,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "DOM II",
          due: "2020-04-03",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 19,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "Components I",
          due: "2020-04-03",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 20,
          unit: "Web Applications I",
          sprint: "Advanced JavaScript",
          name: "Components II",
          due: "2020-04-03",
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
          due: "2020-04-03",
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
          due: "2020-04-04",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 23,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Composing React Components and Passing Data Via Props",
          due: "2020-04-04",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 24,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Component Side Effects",
          due: "2020-04-04",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 25,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Advanced Styling Techniques",
          due: "2020-04-04",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 26,
          unit: "Web Applications I",
          sprint: "Intro to React",
          name: "Sprint Challenge - React Wars",
          due: "2020-04-04",
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
          due: "2020-04-05",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 28,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Form Management",
          due: "2020-04-05",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 29,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Advanced Form Management",
          due: "2020-04-05",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 30,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "cypress.io",
          due: "2020-04-05",
          url: "",
          type: "module",
          cohort_id: 1
        },
        {
          id: 31,
          unit: "Web Applications I",
          sprint: "Single Page Applications",
          name: "Sprint Challenge - Lambda Eats",
          due: "2020-04-05",
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
          due: "2020-04-06",
          url: "",
          type: "sprint",
          cohort_id: 1
        },
      ]);
    });
};
