exports.seed = function(knex) {
  return knex("grades")
    .truncate()
    .then(function() {
      return knex("grades").insert([
        {
          id: 1,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 1,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 1
        },
        {
          id: 2,
          date: "2020-03-30",
          grade: 3,
          notes: "",
          student_id: 2,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 2
        },
        {
          id: 3,
          date: "2020-03-30",
          grade: 1,
          notes: "",
          student_id: 3,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 3
        },
        {
          id: 4,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 4,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 4
        },
        {
          id: 5,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 5,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 5
        },
        {
          id: 6,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 6,
          assignment_id: 1,
          teamlead_id: 1,
          retro_id: 6
        },
        {
          id: 7,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 7,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 7
        },
        {
          id: 8,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 8,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 8
        },
        {
          id: 9,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 9,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 9
        },
        {
          id: 10,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 10,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 10
        },
        {
          id: 11,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 11,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 11
        },
        {
          id: 12,
          date: "2020-03-30",
          grade: 2,
          notes: "",
          student_id: 12,
          assignment_id: 1,
          teamlead_id: 2,
          retro_id: 12
        },
        {
          id: 13,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 1,
          assignment_id: 2,
          teamlead_id: 1,
          retro_id: 13
        },
        {
          id: 14,
          date: "2020-03-31",
          grade: 3,
          notes: "",
          student_id: 2,
          assignment_id: 2,
          teamlead_id: 1,
          retro_id: 14
        },
        // {
        //   id: 15,
        //   date: "2020-03-31",
        //   grade: 1,
        //   notes: "",
        //   student_id: 3,
        //   assignment_id: 2,
        //   teamlead_id: 1,
        //   retro_id: 15
        // },
        {
          id: 16,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 4,
          assignment_id: 2,
          teamlead_id: 1,
          retro_id: 16
        },
        {
          id: 17,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 5,
          assignment_id: 2,
          teamlead_id: 1,
          retro_id: 17
        },
        {
          id: 18,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 6,
          assignment_id: 2,
          teamlead_id: 1,
          retro_id: 18
        },
        {
          id: 19,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 7,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 19
        },
        {
          id: 20,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 8,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 20
        },
        {
          id: 21,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 9,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 21
        },
        {
          id: 22,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 10,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 22
        },
        {
          id: 23,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 11,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 23
        },
        {
          id: 24,
          date: "2020-03-31",
          grade: 2,
          notes: "",
          student_id: 12,
          assignment_id: 2,
          teamlead_id: 2,
          retro_id: 24
        },
        {
          id: 25,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 1,
          assignment_id: 3,
          teamlead_id: 1,
          retro_id: 25
        },
        {
          id: 26,
          date: "2020-04-01",
          grade: 3,
          notes: "",
          student_id: 2,
          assignment_id: 3,
          teamlead_id: 1,
          retro_id: 26
        },
        // {
        //   id: 27,
        //   date: "2020-04-01",
        //   grade: 1,
        //   notes: "",
        //   student_id: 3,
        //   assignment_id: 3,
        //   teamlead_id: 1,
        //   retro_id: 27
        // },
        // {
        //   id: 28,
        //   date: "2020-04-01",
        //   grade: 2,
        //   notes: "",
        //   student_id: 4,
        //   assignment_id: 3,
        //   teamlead_id: 1,
        //   retro_id: 28
        // },
        {
          id: 29,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 5,
          assignment_id: 3,
          teamlead_id: 1,
          retro_id: 29
        },
        {
          id: 30,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 6,
          assignment_id: 3,
          teamlead_id: 1,
          retro_id: 30
        },
        {
          id: 31,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 7,
          assignment_id: 3,
          teamlead_id: 2,
          retro_id: 31
        },
        // {
        //   id: 32,
        //   date: "2020-04-01",
        //   grade: 2,
        //   notes: "",
        //   student_id: 8,
        //   assignment_id: 3,
        //   teamlead_id: 2,
        //   retro_id: 32
        // },
        {
          id: 33,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 9,
          assignment_id: 3,
          teamlead_id: 2,
          retro_id: 33
        },
        {
          id: 34,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 10,
          assignment_id: 3,
          teamlead_id: 2,
          retro_id: 34
        },
        {
          id: 35,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 11,
          assignment_id: 3,
          teamlead_id: 2,
          retro_id: 35
        },
        {
          id: 36,
          date: "2020-04-01",
          grade: 2,
          notes: "",
          student_id: 12,
          assignment_id: 3,
          teamlead_id: 2,
          retro_id: 36
        },
        {
          id: 37,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 1,
          assignment_id: 4,
          teamlead_id: 1,
          retro_id: 37
        },
        {
          id: 38,
          date: "2020-04-02",
          grade: 3,
          notes: "",
          student_id: 2,
          assignment_id: 4,
          teamlead_id: 1,
          retro_id: 38
        },
        // {
        //   id: 39,
        //   date: "2020-04-02",
        //   grade: 1,
        //   notes: "",
        //   student_id: 3,
        //   assignment_id: 4,
        //   teamlead_id: 1,
        //   retro_id: 39
        // },
        {
          id: 40,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 4,
          assignment_id: 4,
          teamlead_id: 1,
          retro_id: 40
        },
        {
          id: 41,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 5,
          assignment_id: 4,
          teamlead_id: 1,
          retro_id: 41
        },
        {
          id: 42,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 6,
          assignment_id: 4,
          teamlead_id: 1,
          retro_id: 42
        },
        {
          id: 43,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 7,
          assignment_id: 4,
          teamlead_id: 2,
          retro_id: 43
        },
        // {
        //   id: 44,
        //   date: "2020-04-02",
        //   grade: 2,
        //   notes: "",
        //   student_id: 8,
        //   assignment_id: 4,
        //   teamlead_id: 2,
        //   retro_id: 44
        // },
        {
          id: 45,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 9,
          assignment_id: 4,
          teamlead_id: 2,
          retro_id: 45
        },
        {
          id: 46,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 10,
          assignment_id: 4,
          teamlead_id: 2,
          retro_id: 46
        },
        {
          id: 47,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 11,
          assignment_id: 4,
          teamlead_id: 2,
          retro_id: 47
        },
        {
          id: 48,
          date: "2020-04-02",
          grade: 2,
          notes: "",
          student_id: 12,
          assignment_id: 4,
          teamlead_id: 2,
          retro_id: 48
        },
        // {
        //   id: 49,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 1,
        //   assignment_id: 5,
        //   teamlead_id: 1,
        //   retro_id: 49
        // },
        {
          id: 50,
          date: "2020-04-03",
          grade: 3,
          notes: "",
          student_id: 2,
          assignment_id: 5,
          teamlead_id: 1,
          retro_id: 50
        },
        // {
        //   id: 51,
        //   date: "2020-04-03",
        //   grade: 1,
        //   notes: "",
        //   student_id: 3,
        //   assignment_id: 5,
        //   teamlead_id: 1,
        //   retro_id: 51
        // },
        // {
        //   id: 52,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 4,
        //   assignment_id: 5,
        //   teamlead_id: 1,
        //   retro_id: 52
        // },
        // {
        //   id: 53,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 5,
        //   assignment_id: 5,
        //   teamlead_id: 1,
        //   retro_id: 53
        // },
        {
          id: 54,
          date: "2020-04-03",
          grade: 2,
          notes: "",
          student_id: 6,
          assignment_id: 5,
          teamlead_id: 1,
          retro_id: 54
        },
        {
          id: 55,
          date: "2020-04-03",
          grade: 2,
          notes: "",
          student_id: 7,
          assignment_id: 5,
          teamlead_id: 2,
          retro_id: 55
        },
        // {
        //   id: 56,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 8,
        //   assignment_id: 5,
        //   teamlead_id: 2,
        //   retro_id: 56
        // },
        {
          id: 57,
          date: "2020-04-03",
          grade: 2,
          notes: "",
          student_id: 9,
          assignment_id: 5,
          teamlead_id: 2,
          retro_id: 57
        },
        // {
        //   id: 58,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 10,
        //   assignment_id: 5,
        //   teamlead_id: 2,
        //   retro_id: 58
        // },
        // {
        //   id: 59,
        //   date: "2020-04-03",
        //   grade: 2,
        //   notes: "",
        //   student_id: 11,
        //   assignment_id: 5,
        //   teamlead_id: 2,
        //   retro_id: 59
        // },
        {
          id: 60,
          date: "2020-04-03",
          grade: 2,
          notes: "",
          student_id: 12,
          assignment_id: 5,
          teamlead_id: 2,
          retro_id: 60
        }
      ]);
    });
};
