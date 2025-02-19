# FinanceHelper
## Goals
1. Learn new technologies; React, Go, LLM
2. Develop a functional tool that I can use to monitor my spending/budget/investments (read-only)
3. Have fun!
## Development
### Important commands
#### Setup and install dedendencies
```bash
npm install
```

#### Run locally
```bash
npm run dev
```

#### Build (do this before commiting to check for errors)
```bash
npm run build
```

### Git Commands
#### Starting development
```
git checkout main
git pull
git checkout -b dev/[YOUR NAME]
```

#### Rebase before commit
```
git checkout main
git fetch
git pull
git checkout dev/<YOUR NAME>
git rebase origin/main
```

#### Commiting
```
git add <files to commit>
git commit -m "commit message"
git push
```

#### Amending the commit
```
git checkout dev/<YOUR NAME>
git add <files to commit>
git commit --amend
git push
```

#### Getting a PR merged
1. Go to the repo on GitHub and open a PR
2. Get it reviewed
3. Once it is time to merge, use the `Create a merge commit` option to only create one commit