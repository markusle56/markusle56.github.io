+++
date = "2025-07-01T14:18:10+09:30"
draft = true
title = "MyEvents"
+++

# Project Overview


{{< paige/figure float="end" >}}
{{< paige/image src="myevent-1.png" width="35rem" class="rounded" >}}
{{< /paige/figure >}}

Every day, the University of Adelaide and its student clubs host dozens of events-from social mixers and pub crawls to career expos and skill-building workshops. These activities are scattered across Instagram, Facebook and various faculty websites, making it difficult for students-especially first‑years - to stay informed. As a result, many valuable opportunities are missed.

**MyEvents** is a centralized, university‑focused platform (think Eventbrite for Adelaide Uni) that enables verified students and staff to:

- Discover and browse upcoming events
- Search, filter and explore rich event details
- Register or purchase (free and on-site paid) tickets
- Create and publish their own events

With MyEvents, everyone in our community can easily find and participate in the experiences that matter to them.

---
## Tech Stack

- **Front End:** Vue.js
- **Back End:** Node.js, MySQL, Passport.js

---

{{< paige/figure float="end" >}}
{{< paige/image src="myevent-2.png" width="40rem" class="rounded" >}}
{{< /paige/figure >}}

## Features & Functionality


### Role-Based Features

| Feature                        | Admin | User | Visitor |
| ------------------------------ | :---: | :--: | :-----: |
| **Admin Dashboard**            |   ✓   |      |         |
| **User Management**            |   ✓   |      |         |
| • Search & Filter Users        |   ✓   |      |         |
| • List All Users               |   ✓   |      |         |
| • Add & Edit Users             |   ✓   |      |         |
| • Assign Admin Role            |   ✓   |      |         |
| • Delete Users                 |   ✓   |      |         |
| **Event Management**           |       |      |         |
| • Search & Filter Events       |   ✓   |   ✓  |    ✓    |
| • List All Events              |   ✓   |   ✓  |    ✓    |
| • Create & Edit Events         |   ✓   |   ✓  |         |
| • Upload Event Images          |   ✓   |   ✓  |    ✓    |
| • Delete Events                |   ✓   |      |         |
| **Event Browsing & Ticketing** |       |      |         |
| • Browse & View Details        |   ✓   |   ✓  |    ✓    |
| • Filter by Type & Date        |   ✓   |   ✓  |    ✓    |
| • Ticket Quantity Control      |   ✓   |   ✓  |    ✓    |
| • Purchase Tickets             |   ✓   |   ✓  |    ✓    |
| **Authentication & Profiles**  |       |      |         |
| • Local Signup & Login         |       |   ✓  |    ✓    |
| • Google OAuth Integration     |       |   ✓  |    ✓    |
| • Profile Management           |   ✓   |   ✓  |         |

--- 

## Security & Quality

- **Session Management:** Secure cookies, session timeouts and logout handling
- **Input Validation & Sanitization:** Protection against SQL injection, XSS and other attacks
- **Password Security:** Bcrypt hashing and complexity enforcement
- **Role-Based Access Control:** Fine‑grained permissions on UI and API endpoints
- **Password Strength Meter:** Real‑time feedback during registration
- **Email Notifications:** Automated welcome messages and ticket confirmations

--- 
## Known Limitations

- **Forgot Password:** UI scaffolded; backend flow pending
- **Online Payments:** Currently cash‑only on-site; no integrated gateway
- **Scalability:** Single‑region MySQL; consider sharding or read‑replicas under heavy load

--- 
## Project Team

| Name                 | Role               | GitHub Handle                               |
|----------------------|--------------------|----------------------------------------------|
| **Anh Khoa Le**      | Backend Developer  | [markusle56](https://github.com/markusle56)  |
| **Ngoc Han Ngo**     | Frontend Developer | [ngongochan](https://github.com/ngongochan)  |
| **Luong Phuoc Nguyen** | Frontend Developer | [lphuoc16](https://github.com/lphuoc16)     |
