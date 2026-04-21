# WS_course_task #

This repository contains automated tests created during QA/AQA training.

# Clone the repository: #

```bash
git clone https://github.com/PashaDnipro-WS/WS_course_task.git
cd WS_course_task

# Install dependencies: #

npm install

# Run tests: #

1. Run specific test file:

npx wdio run wdio.conf.js --spec ./test/specs/signup.spec.js

2. You can also run tests using predefined scripts:

npm run test:test
npm run test:hw

* test:test → runs main test file
* test:hw → runs homework tests
