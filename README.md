# API - Preliminary Documentation
base URL: ``` /api ```

## Authentication
### Registration:
POST to ``` /auth/register ```

Request Body:
```
    {
        "email": string (must include '@' and '.' - required),
        "first_name": string (required),
        "last_name": string (required),
        "img_url": string,
        "type": string ('admin', 'SL', 'TL', or 'student' - required),
        "password": string (8 char min - required)
    }
```

Response Body:
```
    {
        "id": integer (primary key for 'users' table),
        "email": string,
        "first_name": string,
        "last_name": string,
        "img_url": string
        "type": string,
        "token": string (will be required for protected routes)
    }
  
```

### Login
POST to ``` /auth/register ```

Request Body:
```
    {
        "email": string
        "password": string,
    }
```

Response Body:
```
    {
        "id": integer, (primary key for *user type* table)
        "email": string,
        "first_name": string,
        "last_name": string,
        "type": string,
        "fifth_day": string,
        "cohort_id": integer,
        "teamlead_id": integer, (student type only)
        "fifth_day_tl_id": integer, (student type only)
        "token": string
    }
```

## Team Leads

 ### Get List of Students
 GET to ``` /teamleads/${id}/students ```

 ### Get All Student Records by TL
 GET to ``` /teamleads/${id}/studentdata ```

 ### Get All Student Records by 5th Day TL
 GET to ``` /teamleads/${id}/studentdata-5thday ```

 Response Body:
 ```
 [
    {
        "id": (student id),
        "email": string,
        "first_name": string,
        "last_name": string,
        "img_url": string,
        "type": string,
        "fifth_day": string,
        "cohort_id": (cohort id),
        "teamlead_id": (teamlead id),
        "fifth_day_tl_id": (5th day teamlead id),
        "attendance":[
            {
                "id": integer,
                "date": "2020-04-03",
                "time_slot": "Stand-up",
                "present": "true",
                "notes": "",
                "student_id": 1,
                "assignment_id": 5
            },
            {
                 ... rest of attendance
            }
         ],
        "grades":[
            {
                "id": integer,
                "date": "2020-04-03",
                "grade": 2,
                "notes": "",
                "student_id": 1,
                "assignment_id": 5,
                "teamlead_id": 1
            },
            {
                 ... rest of grades
            }
         ],
        "retros":[
            {
                "id": integer,
                "date": "2020-04-03",
                "url": "http://github.com/TL-Dashboard",
                "mood": 2,
                "notes": "",
                "student_id": 1,
                "assignment_id": 5,
                "teamlead_id": 1
            },
            {
                 ... rest of retros
            }
         ]
    },
    {
        ... rest of students/data for specified team lead
    }
 ]
 ```

## Records ( assignments, attendance, cohorts, grades, retros, tickets )
 ### Get Record
 GET to ``` /*record* ``` where record is table name

 ### Get By Id
 GET to ``` /*record*/${id} ``` where record is table name

 ### Get By Filter
 GET to ``` /*record*/query/filter?key=value ``` where record is table name, returns in DESC order

 ### Create Record
 POST to ``` /*record* ``` where record is table name

 ### Update Record By Id
 PUT to ``` /*record*/${id} ``` where record is table name

 ### Delete Record By Id
 DEL to ``` /*record*/${id} ``` where record is table name

 Response Body (tickets):
 ```
 [
    {
        "id": integer,
        "posted_by": "Robert Gordon",
        "type": "Other",
        "date": "2020-04-01",
        "description": "When can Lambda begin using this new dashboard?",
        "status": "In Progress",
        "sectionlead_id": 1, (nullable)
        "teamlead_id": 1, (nullable)
        "student_id": null (nullable)
    },
    {
        ... rest of records
    }
 ]
 ```

## Logout
### User log out:
GET to ```/auth/logout```

Response Body:
```
    { message: User successfully logged out}
```
## Author

👤 **Robert Gordon**

* Website: rob-gordon.com
* Github: [@robertdgordon](https://github.com/robertdgordon)