# Setup SonarQube for a Node.js project with Github Action

> This sample app demonstrate how to set up SonarQube with GitHub Actions for a Node.js project.
> - We will be installing SonarQube on local machine.
> - Install SonarScanner globally in local machine.
> - We will be using Self-Hosted GitHub Runner, which lets GitHub Actions use localhost to access your local SonarQube server. 
     Go to your GitHub repo: Settings → Actions → Runners → New self-hosted runner

## 🚨 Important: GitHub Actions Cannot Access Your Localhost

- If you’re using a self-hosted SonarQube on your machine and try to run analysis from GitHub Actions, localhost will not work, because GitHub Actions runs on GitHub-hosted VMs, not your machine.
- ✅ Solution Options:
    - Option 1: Use SonarCloud (Recommended for GitHub)
    - Option 2: Host SonarQube on a Public Server or Cloud (e.g., GCP, AWS) - You’ll need to deploy SonarQube on a reachable IP or domain and update: sonar.host.url=http://your-public-ip:9000
    - Option 3: Use a Self-Hosted GitHub Runner (Advanced) - Install GitHub Actions runner on your machine (where SonarQube is running), so localhost works as expected.

## 🛠 Basic Setup - step by step

- You should have a SonarQube server (self-hosted, either cloud or local)
- Setup/Install SonarQube and login with Admin/Admin (If running from local it should run on http://localhost:9000/)
- After login create SonarQube Token: → My Account → Security → Generate Token
- Create a new project
- Add the token in GitHub repo: ➔ GitHub → Settings → Secrets and variables → Actions → New Repository Secret:
  -   Name: SONAR_TOKEN
  -   value: your generated token
  -   Name: SONAR_HOST_URL
  -   value: use https://your-sonarqube-server.com
- Create a file called sonar-project.properties and keep it in root of project:
  ```bash
    sonar.projectKey=<YOUR_PROJECT_KEY>
    sonar.host.url=<https://your-sonarqube-server.com>
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
