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
        "id": integer (primary key for 'users' table),
        "first_name": string,
        "last_name": string,
        "email": string,
        "password": string (hashed),
        "phone": string,
        "organization": string,
        "type": string,
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

            ],
        "grades":[

            ],
        "retros":[

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

 Response Body (grades):
 ```
 [
    {
        "id": 1,
        "date": "2020-03-30",
        "grade": 2,
        "notes": "",
        "student_id": 1,
        "assignment_id": 1,
        "teamlead_id": 1
    },
    {
        ... rest of records
    }
 ]
 ```

## Logout
### Get user log out:
GET to ```/auth/logout```

Response Body:
```
    { message: User successfully logged out}
```
## Author

👤 **Robert Gordon**

* Website: rob-gordon.com
* Github: [@robertdgordon](https://github.com/robertdgordon)