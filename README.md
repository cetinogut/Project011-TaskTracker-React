<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# Project-011 : Task Tracker(REACT)

## How to Publish to GitHub Pages (gh-pages)
  1. During  the project development do the routine github repo pushs. Finalize the project in your localhost.
  2. Ready to publish in gh-pages? If so;
      - Add this statement: "homepage": "https://cetinogut.github.io/Project011-TaskTrackerV1-React", at the beginnig of your package.json. This will come right after the opening curly braces of the package.json, just before the 'name' key.
      - Replace cetinogut with your own github profile name.
      - Replace Project011.... with your own project repo name. This part is important if you update the name of your repo in the futurei you have to update it here as well.
      - Add this statement :
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
        as the last lines in your "scripts" section of the package.json. 
      - Now we are ready to publish to github. In your terminal (VS Code terminal in your project folder) run : "npm run deploy" command.. This will create a build folder in your project folder. Now you can check your published react app att URL that you added to the first line of package.json, (for me): https://cetinogut.github.io/Project011-TaskTrackerV1-React
  3. When ever you make an updat in your project, after you run the project in your localhost, then update the project repo in github and finally run "npm run deploy" script fro myour terminal. In this way, you will publish an updated verison of your project to gh-pages. 

HAPPY CODING....

## Description

Project aims to create a Task Tracker App.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
006 - Task Tracker (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── Header.js
│    │       │     └── Button.js
│    │       │   
│    │       ├── CreateTask.js
│    │       │   
│    │       │   
│    │       └── Tasks.js
|    |         └── Task.js
│    ├── store
│    │       ├── initialState.js
|    |
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Expected Outcome

![task_tracker_expected](https://github.com/cetinogut/ProjectScreenCaptureGifs/blob/f19464872285d6c1a78d50d4c98753212ecd93d1/React-TaskTrackerV1.gif)

## Objective

Build a Task Tracker App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app task-tracker`

- Step 2 : Install `"react-icons"` package to your `package.json` for icons.

- Step 3: Build Task Tracker App.

- Step 4: You can use CSS frameworks like Bootstrap, Semantic UI.

- Step 5: Push your application into your own public repo on Github

- Step 6: Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
