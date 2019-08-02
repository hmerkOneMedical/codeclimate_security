# codeclimate security config

Install on a per-repo basis:
- 
- Install GitHub app in repos: (REPO OWNER)
    - https://github.com/apps/codeclimate
- Add repo to codeclimate (Codeclimate ADMIN)
    - Add it to the “Developers” and “appsec” teams
    - Ensure all contributors to repo have codeclimate accounts. (Only code owned by codeclimate members will get analyzed.)
- In the codeclimate dashboard, navigate to repo settings
    - Under Github, enable summary comments, inline issue comments, etc. Hit "save" on the left.
    - Hit install on the right next to "pull request status updates"
    
    
Configure with .codeclimate.yml file.
-
- Add plugins:
  - bandit (python)
  - eslint (js)
- Note:
  - eslint needs a plugin to run security analysis in addition to linting.
  ```
  npm i --save-dev eslint-plugin-security
  ```
  - eslint will error until parser is installed.
  ```
  npm install babel-eslint --save-dev
  ```


Triaging Vulnerabilities
-
- Bandit is pretty clear with advice :yay:
- Eslint security not so much: Rules that are flagged are defined here https://github.com/nodesecurity/eslint-plugin-security
- To mark a value as a false positive, use 
```// eslint-disable-line``` or more specifically, ```// eslint-disable-line [RULE NAME HERE]```
