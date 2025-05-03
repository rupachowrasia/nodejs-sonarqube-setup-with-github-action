# Setup SonarQube for a Node.js project with Github Action

> This sample app demonstrate how to set up SonarQube with GitHub Actions for a Node.js project.

## 🛠 Basic Setup - step by step

- You should have a SonarQube server (self-hosted)
- Setup/Install SonarQube and login with Admin/Admin (If running from local it should run on http://localhost:9000/)
- After login create SonarQube Token: → My Account → Security → Generate Token
- Create a new project
- Add the token in GitHub repo: ➔ GitHub → Settings → Secrets and variables → Actions → New Repository Secret:
  -   Name: SONAR_TOKEN
  -   value: your generated token
  -   Name: SONAR_HOST_URL
  -   value: use http://localhost:9000
- Create a file called sonar-project.properties and keep it in root of project:
  ```bash
    sonar.projectKey=<YOUR_PROJECT_KEY>
    sonar.host.url=http://localhost:9000
    sonar.sources=.
    sonar.language=js
  ```
- Add GitHub Action Workflow (.github/workflows/sonarqube.yml): code is provided in the Repo.

## ⚡ Custom Quality Gates
- In SonarQube UI → Go to your project → Administration → Quality Gates → create your own rules, like:
    - Coverage > 80%
    - 0 Bugs
    - 0 Critical Security Hotspots
- Your PRs will only pass if they meet this standard!

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/rupachowrasia/nodejs-sonarqube-setup-with-github-action.git

# Move into the project directory
cd nodejs-sonarqube-setup-with-github-action

# Install dependencies
npm install

# Run the app
npm run start
