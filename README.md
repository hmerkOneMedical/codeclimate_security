# codeclimate security config

Install on a per-repo basis:
- 
- Install GitHub app in repos: (REPO OWNER)
    - https://github.com/apps/codeclimate
- Add repo to codeclimate (Codeclimate ADMIN)
    - Ensure all contributors to repo have codeclimate accounts. Only code owned by codeclimate members will get analyzed.
- In the codeclimate dashboard, navigate to repo settings
    - Under Github, enable summary comments, inline issue comments, etc.
    
    
Configure with .codeclimate.yml file.
-
- Add plugins:
  - bandit (python)
  - eslint (js)
  - tslint (ts)
- Note:
  - eslint and tslint need plugins to run security analysis in addition to linting.
  ```
  npm i --save-dev eslint-plugin-security
  npm i --save-dev tslint-config-security 
  ```
  - eslint will error until parser is installed.
  ```
  npm install babel-eslint --save-dev
  ```
