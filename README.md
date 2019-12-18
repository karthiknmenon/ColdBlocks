# ColdBlocks
Final year project repository. <br />
___

## Rules for pushing files into repo 
* Navigate to repository using git bash 
    * Pull from master using command `git pull`
* Make sure you create a new branch after performing pull from master and that you are presently in branch master 
    * `git checkout master`
    * `git pull`
    * Check for conflicts
    * Then proceed with next step
* Create a new branch with branch name as the component name
    * Create new branch using `git checkout -b branch_name`
    * Check if branch is created successfully using `git branch`
    * If you are in the correct branch specified as ( *branch_name), then proceed
* To commit changes into the repo (Make sure you are in your branch)
    * `git add .`
    * `git commit -m "add a commit message"`
    * `git push`
* Checking for conflicts - 
    * When performing `git pull` there might be conflicts 
    * Review code changes and then perform `git merge master` from your branch

___






