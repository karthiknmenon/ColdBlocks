![ColdBlocks](https://user-images.githubusercontent.com/41678651/71070470-d75e8000-21a0-11ea-9a20-0853cdaa476b.jpg)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
    *  Navigate to your repository in your machine using command `cd`
    * `git add .`
    * `git commit -m "add a commit message"`, give a meaningful commit message
    * `git push`
* Checking for conflicts - 
    * When performing `git pull` there might be conflicts 
    * Review code changes and then perform `git merge master` from your branch
* For more information on git commands - go to [GitHub Command](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

<br />
:v: :fist:
___







## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/deniltitus"><img src="https://avatars2.githubusercontent.com/u/54170237?v=4" width="100px;" alt=""/><br /><sub><b>deniltitus</b></sub></a><br /><a href="https://github.com/mojojojo20/ColdBlocks/commits?author=deniltitus" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/iamkt23"><img src="https://avatars0.githubusercontent.com/u/41678640?v=4" width="100px;" alt=""/><br /><sub><b>iamkt23</b></sub></a><br /><a href="https://github.com/mojojojo20/ColdBlocks/commits?author=iamkt23" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!