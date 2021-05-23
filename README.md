Milestone Project2 - Memory Toad Game

##Introduction-

Welcome to my second Milestone Project called *'Memory Toad'* which will be showcasing my skills, learning and understanding that I have learnt through the course so far while being implemented into a front-end, user centric memory game.

Within this README, I will cover all the steps and planning processes used while creating this project, including where I gained my inspiration from and my main focuses as the developer. You can view my live project [here](https://laila-ba.github.io/project2/)

During the planning process, I found the Elements of User-Experience to be helpful as it allowed me to keep in mind what the user wants and how my piece should respond to their actions. These elements are broken into 5 key stages:

- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

#Stategy-

I began to conduct some research on what features a conventional memory game included in order to further understand what users would be expecting. I came up with a list of goals that I would want to achieve for my project:

*Creator stories*

  - As a creator, I want to create a positive user response throughout the project, following the principles of UX
  design and presents a structured layout and navigation model.
  - As a creator, I want to make sure that all content isn't too much for the eye and it all flows together nicely and smoothly.
  - As a creator, I want to ensure that once viewing my project from the homepage, the user is not confused by the purpose of the project.
  - As a creator, I want users are able to interact with the site in their particular way, to achieve their
  personal goals

*User Stories*

  - As a user, I want to be able to easily navigate my way through the site.
  - As a user, I want to be able to play the game across any device.
  - As a user, I want to have clear instructions so I know how to play the game.
  - As a user, I want to be able to contact the developer with any questions.

Once establishing both creator and user stories, my goals for my project were clear as I had an evident idea of what users will be expecting of the project game.

#Scope-

This project is a memory matching game that allows you to keep track of your score and moves.

1. The landing, play and contact page share the same simple design, yet correspond perfectly with Nintendo's retro game colour scheme. The simple to use, neat display offers the users easy navigation and total control.

2. The home page is an introduction to the game site. It includes a main image and a short and simple summary of the game and its instructions. It has a brightly coloured play button to direct the user to the game page.

3. The play page greets the user with two main buttons; the play button and the instructions button.
  - As the user clicks the play button, the game grid is instantly shown alongside their score, moves and reset button.
  - The user must choose 2 cards at a time and see if they are a match. If they are, the cards stay facing up, otherwise they are    flipped back down and the user must try to remember where the colours are.
  - Once all of the matches are found, a congratulations message appears and the user is able to reset the game and replay.

4. A contact page to allow the users to contact the developer with questions and suggestions.

##Requirements-
- The game can be played across all devices and screen sizes.
- The site is responsive.
- Buttons and links are clear and easy to click on.
- The navigation bar is always present(A menu for smaller screen sizes.)
- A functioning reset button so the user doesn't have to exit the browser to play again.

#Structure-

As my game characters were based on Nintendo's Mario games, i wanted to make a clear connection to the colours Nintendo uses within their games. This is done to bring the nostalgic feel to my project and incorporate the Mario magic that I, and Nintendo fans feel.
As I was already familiar with the Nintendo bright and fun colour scheme, i went ahead and chose these as my main colours:

- Light Blue #60AAF6
- Dark Blue #2323FB
- Yellow #FFDA44
- Red #FD0000

These bright, primary colours create a fun and explorative environment for the game. To enhance this playful theme throughout my project, i decided to use a moving pixel cloud background to mimic the moving sky that the retro Mario games had.

**Typography**

- Segoe UI

I decided to use one main front throughout the project and use a variation of font weights to offer a diverse yet simple look that is easy to read for the eye.

The navigation bar and footer and consistent throughout all pages to keep a clean and simple look in order for the user to feel familiar to where features are placed across the site. As the screen size becomes smaller, the navigation turns into a hamburger menu with a toggle feature, allowing the user to interact with when they want the menu to appear.

Use of relevant images on the landing and play page to fill in empty spaces and be appealing to the eye.

Within my project, i used bootstrap's framework and libraries to ensure my site is responsive and has a clean finish.

#Skeleton-

As part of my planning process, creating mockups helped me to visualize my ideas and see if they would be pleasing to the eye. These are my initial conceptual ideas:

*HOME PAGE*

![project2-index](https://user-images.githubusercontent.com/75024926/119268300-37552380-bbea-11eb-9b68-bc22126cac35.png)

*PLAY PAGE*

![project2-play](https://user-images.githubusercontent.com/75024926/119268309-420fb880-bbea-11eb-8baa-b3527f286a24.png)

*CONTACT PAGE*

![project2-contact](https://user-images.githubusercontent.com/75024926/119268322-4e941100-bbea-11eb-90cb-635f25088b18.png)

There were minor changes made from the origional idea however i attempted to not make any major differences. Here are the differences between the initial mockups to my current project:

###Home page:

-The nav bar logo and sub pages were on opposite sides of the page. I brought these closer as i thought it look more appealing to the eye.
- The hero image and text have switched sides, making it easier to become responsive

###Play page:

-The play and instructions button have been removed as the game appears by default and the instructions are on the home page. This made a lot more sense as now, the user can click the play button on the home page and be redirected to the play page and begin the game without clicking any extra buttons.

- The 'moves' and 'score' boxes appear above the game, keeping a simple and clean finish to the page. This can stay the same on smaller screens aswell.
- The toad image on the page is removed on smaller screens to allow only the game to be the main focus and be too much for the eye.

I chose to go ahead with these changes as I thought it would make my project a lot more appealing to the user. The changes were made as a result of my growth and learning in interactive, front-end development as I have more of an understanding and more experience in the design and development of the project.

#Surface-

**Features that are present in the project**

- All pages have the same responsive navigation bar which includes the game logo and sub pages. The nav bar can be viewed on all devices as it toggles into a hamburger menu when viewed on smaller viewports. The active page is highlighted bright yellow, corresponding to the site's colour scheme.

- A play button on the landing page to allow the user to be directed easily to play the game instead of having to click the options on the nav bar.

- A bright, moving pixel sky backgound to enhance the playful theme and allow the other primary colours across the site to stand out. E.g: the red play button goes very nicely with the blue coloured background.

- There is a clear and evident colour scheme throughout the site: blue, yellow and red. This adds very nicely to the clean and simple finish while also bringing a nostalgic, Nintendo feel.

- Large hero images of Toad on the Home and Play page to keep the theme consistent and fill out empty spaces.

- A simple, minimalistic footer with no background colour, allowing the soical icons to stand out as they are in different primary colours.

- The score and moves update with every match made.

- A contact form on the contact page to allow the user to directly communicate with the developer. 

- A reset button for Play page, allowing the user to reset their moves and score easily without refreshing the page or closing the tab.

**Features that I still need to add**

- Having the contact form send the user's message to the developers email.

- Adding a timer feature to the game.

- To add a feature to the game where the user cant click on more than two cards at a time.

- As the Winning message appears, the game is no longer on display.

# Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * This is used a the base of the code. It structures the code and acts as the main building block

* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
  * This allows styling to be added to the project.

* [Hover.css](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)
  * Hover effect used for the social icons, navbar, and portfolio.

* [Bootstrap](https://getbootstrap.com/L)
  * A framework to make the project responsive

* [jQuery](https://jquery.com/)
  * A framework used with Javascript

* [Font Awesome](https://fontawesome.com/)
  * Used to obtain icons used for the footer and contact page.

* [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
  * Used to help debug the code and help find syntax errors.

* [Github](https://github.com/)
  * Used to push and store the code.

* [Atom](https://atom.io/)
  * Used as the IDE and the development environment for writing the code.

* [JustInMind](https://www.justinmind.com/)
  * Used to create mockups.

* [JS validator](https://jshint.com/)
  * Used as a JS validator

* [HTML validator](https://www.freeformatter.com/html-validator.html)
  * Used as a HTML validator
  
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
  * Used as a CSS validator

* [Grammarly](https://www.grammarly.com/)
  * Used to check and correct grammatical errors across the project.

# Testing
 * [User Stories](https://www.grammarly.com/)
