# Lecture 1

## Welcome to Projects & Algorithms!  You're now in the home stretch of the boot camp!

Congratulations on making it this far!  You've learned Web Fundamentals and at least one full stack - Python, Java and/or MERN.  Enjoy these final weeks!

## Administrative details

Your solo project proposal is due Thursday, July 8.

Your group project proposal is due Wednesday, July 21.  At this time for group projects, start finding people who took the same stack(s) as you for your group projects and brainstorm ideas.  The group project sign-up sheet can be found [here](https://docs.google.com/spreadsheets/d/195FMl-kk3kE0-OHRTGGmNmegk2LcwWmJn-qFx1qVinU/edit#gid=0).

If you haven't submitted your project proposal, please e-mail me or set up a one-on-one appointment as soon as you can so that I can sign off on it.  For your proposal, I'll need the following:
- A wireframe or some other visual for your site
- Feature list - what you must include, what you'd like to have
- Description of your project
- Link to your GitHub repo - you don't need to have anything uploaded yet

**Assignments:** You have 4 non-project core assignments to complete.  Additionally, there are 4 core project assignments - two of them are your solo and group project proposals, and the other two are your solo and group project presentations, meaning you have a grand total of 8 core assignments.  You must complete at least 7 out of 8 core assignments, and 4 of the required 7 must be project assignments.  You MUST submit through the platform after I give my approval to receive credit.  A GitHub link will suffice for the presentations, while a .zip file or something similar will do for the proposals.

I encourage you folks to work together in the assignments!  You can learn a lot from one another!  Do note that everyone still has to submit their own files to receive credit on the platform.

Assignments must be completed by Friday of week 4, in this case Friday, July 30, noon Pacific.  This is a hard deadline.  Note that with the recent curriculum changes CORE assignments are effectively due at the end of Sunday of each week.

**Discussion topics:**  You must complete 6 out of 8 minimum to satisfy this requirement.  Please use the [login](https://login.codingdojo.com) (newer) version of the platform for discussion questions.  All questions are unlocked for that week; answers must be submitted by 11:59 PM Pacific time Sunday night to count.  **This cannot be emphasized enough: Do NOT use the older [learn](https://learn.codingdojo.com) platform for discussion topics!  Use ONLY the new (login) platform for that!!**

**NOTE: There are NO discussion topic make-up opportunities - you must submit for that week!**

**Don't forget to keep up with your algo assignments and discussion topics!  Do not fall behind early!**  It's easy to get so focused on your project that you forget about your assignments and discussions - don't let it happen to you!

## Expectations for projects

Make some wireframes for your project.  A couple of sites you can use to make wireframes are [balsamiq](https://www.balsamiq.com), [wireframe.cc](https://wireframe.cc), among many others you can use.  If you want, you can always use a software program to illustrate your site like Photoshop, Paint, etc.  Or you can even sketch it out by hand!  The important thing is to send some sort of visual that will illustrate the important pages of your site that you'll develop for your project.

It is very tempting to add a ton of features for your site.  Try not to get overwhelmed; you'll find that some features that you thought were easy to implement take a lot longer than anticipated.  Or the opposite could happen: a seemingly complex item will actually be pretty straightforward to add.  Do not go over the top with your project.  Make a list of things that you absolutely must have, features that you'd like to have but aren't necessary at this time.  Focus on one feature at a time to make your project manageable.  Make that feature work before moving on to the next one.

When you present your project, imagine you're pitching your idea to prospective clients.  They want to know why your project/site is desirable.  What features does it have?  What is the purpose of your site?

Don't be afraid to reach out to me, any of the other instructors or TAs, or even your fellow cohort mates.  While this is a solo project, many people often run into the same issues, so share your experiences!  They could save a lot of time for others so they won't go through the same frustrations that you did.  Nobody knows everything - your instructor won't know about every API out there - this is the power of becoming independent - knowing when to look on your own vs. when to ask for help.

If you are unsure of what you want to do for your project, there are some ideas in the "Wireframes" tool in the Projects & Algorithms section of the platform.  Have fun!

## Overview of Git and GitHub

Git is a version control system.  It allows people to collaborate on coding projects.  It's also used to keep track of changes to the code - so your version history.  It has a bit of a steep learning curve, but here at Coding Dojo we'll teach you the basics of collaborating on GitHub in your group projects.  More details on this will come towards the end of week 2.

You should already know how to create a repository on your computer and on GitHub and be able to connect them together.  If you do not, however, there should be some material in Web Fundamentals you can examine.  Or you can use the links below for references.  If you're still not sure how to make a repository on your machine or GitHub, or need some assistance, please reach out to me or one of the other instructors/TAs.

Below is a brief review of making a repo:

1. Go the topmost folder that has your project.  Inside there, type `git init`.
2. Make sure you have a .gitignore file in the folder where you typed `git init`.  If not, make one now!
3. Type `git add .` or a similar command for adding files.  This is called staging your files.  (The period means all files that were not mentioned in the .gitignore file.)
4. Optional: type `git status` to check to see what was added.  If you want to undo the files that were added, you can type `git reset`.
5. Now you commit your changes by typing `git commit -m "Your message here"`.  (Type `git status` and you should notice that the files were committed.)
6. Now on GitHub create a repository.  You don't need to select any of the options like adding a README or creating a .gitignore.
7. Back on your machine, type `git remote add origin https://github.com/yourGitHubUserName/yourRepoName.git`.
8. Now type `git push -u origin main` (or `git push -u origin master` depending on the name of your branch - it'll usually be main or master, but in group projects it'll be a different branch - more info coming later).  Now check your repo on GitHub - it should show your files!

For future changes, you only need to add, commit and push.  For pushing, you only need to type `git push` for your solo project.

**IMPORTANT ANNOUNCEMENT:** Starting in the middle of August 2021, you MUST have two-factor authenication and/or a personal access token with your GitHub account.  You can look up creating a personal access token [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and configuring two-factor authentication [here](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), plus info on accessing GitHub with 2FA [here](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication).

### .gitignore files
A .gitignore file is very important because there are many types of files you do not want to upload to GitHub.  Another reason to create a .gitignore file is that it's very likely your project will contain secret keys, API keys, or other sensitive information that shouldn't be seen in a public setting.  You wouldn't want someone taking your deployed Django project, for instance, and then running up a huge tab because they found your secret key in your `settings.py` file!

**IMPORTANT:** Make your .gitignore file BEFORE uploading to GitHub for the first time.  If you configured it properly, this will ensure that no sensitive data will show up in your repository history on GitHub.  You can check which files you added by typing "git status" before committing your changes and pushing.

A handy site you can use to make a .gitignore file is [gitignore.io](https://www.toptal.com/developers/gitignore).  Here you can enter what OSs, IDEs and programming languages you can add to the .gitignore file.  I'd recommend adding at least Windows, macOS and Linux for your OSs, Eclipse if you're using Java, Django/Flask for Python, react and Node if you took MERN.  

**Double check to make sure your generated or manually created .gitignore file includes .env and other files that will hold your sensitive data!**