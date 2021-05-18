## ReactJS and Redux Frontend

A React frontend app that lets users create posts on a subject and then up/down vote those posts, as well as comment on posts which can also be voted on by users. The app has full CRUD capabilities, where users can also delete and edit posts. Styled with bootstrap and scaffolded using [babel and webpack](https://github.com/phHank/frontend.git).

This project utilise state management, in the form of Redux. Posts, their votes/scores and comments all are managed by the store which facilitates consistant information display throughout the app.

# Setup:
- after git cloning repo: https://github.com/phHank/readable.git
 - `cd frontend/`
 - install the dependencies with `npm install`
 - run the dev server for the first time with `npm run start` and with `npm start` for any subsequent runs.
 - **NB** make sure the [psuedo-backend server](https://github.com/phHank/readable/blob/master/backend/README.md) is running on port 3001 before logging in.