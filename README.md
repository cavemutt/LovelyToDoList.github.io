# The Lovely To-Do List

A calming breeze helps you keep track of your to-do list and makes getting items off your list fun!
Hand-coded with love by Jennifer Lee Dev

![The Lovely To-Do List in action](/assets/LTDL-full.jpg)

## This project uses : 
HTML5, CSS3, JavaScript, Local Storage, and GSAP (for the Silly Billy Bubbles Tour)


## Features summary :
- Local storage keeps track of who you are and what your to-dos are, including what you've crossed off 
- A reset user info button/modal will reset the list and delete all local storage pertaining to the app
- Sound clips play when you remove items from your list, a volume control is provided
- A modal will welcome you and ask your name, defaulting to "Anonymous" if not provided
- The number of list items are displayed and the list can be filtered based on completed or not
- A lovely CSS-animated background will calm your to-do list nerves
- If add a blank item to your list, a very important task will be provided for you
- If you add the same item twice, it will add "again" to the end of it
- A brief tour of the app, provided by The Silly Billy Bubbles Tour, which you can close and restart at any time.


## Why I Built This :
The To-Do List is a classic coding assignment that I had previously done along with different tutorials, as it helps me to learn how different people code similar things. In doing this assignment with the Creative Javascript course by DevelopedByEd, I couldn't help but greatly expand upon the basic input and list creation, local storage and filtering ideas that were presented in the course. 

## Why a "Lovely" to-do list?
Making a list of To-Dos can contribute to a little stress for some people, so I figured a Lovely To-Do List would make the task a little more calming.

## What I've added to the basics :
The styling choices are my own, beyond the basics of input, icons, a static name at the top, a completed and deleted button on each list item, and Ed's idea of an item kind of falling off the list upon delete. 

The CSS animated background is made from a still photo, from which I've extracted the branches and leaves and added polygons to animate the moving bokeh light effects. I used custom CSS variables and different animations to make it more natural looking. The list itself has a blurry backdrop to allow the user to see the background even when the list grows in size.  

The functionality presented in Ed's course included taking input, creating the list elements with their buttons, filtering the list based on if marked as completed or not with a dropdown of options, and adding to, deleting and retrieving items from local storage(though did not keep track of list order or if marked as completed).

## Features that are my original
- Local Storage keeps track of which items are marked as completed or not, and of what order they were entered in.
- An opening modal will greet the user and ask for their name. If no name is given, they are designated as "Anonymous". This name is saved into Local Storage with the list items. If a name is already detected on load, it skips the welcome modal and goes straight to the main site.
- A User Reset button is provided to open a modal where the user can choose to clear the list and all local storage items pertaining to this app. If a user chooses to clear the data, the user will go back to the welcome modal. 
- The user's name will be displayed as owning this To-Do list.
- The number of items (completed or not) will be kept track of below the input frame, and if all items are removed from the list, it will tell the user that they are amazing!
- Users will enter their to-do items into the input which will then be displayed in a two-column list. If an item is marked as completed with the check mark icon, it is crossed out and diminished. This effect can be toggled.
- If the user adds to the list but leaves the input field blank, very important default tasks will be added to the list randomly from an array.
- If the user or default list adds the same item more than once, the word "again" will be added to the list item. 
- If a list item is deleted using the trash button, it will rise a little, then fall, and crash into the abyss, sometimes disturbing the abyss cat. The audio clip chosen is random from a choice of three.
- A volume control is located at the top for the audio clips. It is defaulted to very low volume. The volume icon and number display changes to reflect the volume value.

## Silly Billy's Bubble Tour
I've also installed my very own **Silly Billy Bubbles Tour guide** to give some bts of the project for those interested. (see the silly-billy-bubbles-tour repo!).


### What I've learned and future development : 
This was great practice with functional JavaScript and CSS animation. I really enjoyed being able to bring my ideas to life in this app. This project helped solidify some skills, such as creating elements, controlling modals and using audio. I also was able to learn much about how local storage works and how to store, change and retrieve items with differences.

This app is ok on smaller screen sizes, but just 'ok', it could be improved. It also needs improvement as far as accessibility. I am very sure some ARIA properties would benefit the screen-reading of this app, as well as the Silly Billy Bubbles Tour. I will come back to my projects to upgrade their accessibility. The time/date of when a list item is added would also be useful.  

If you see any errors or have any comments or suggestions, please let me know! Feel free to email me at jennifer_lee_dev@protonmail.com

### Credits :
Thanks to Dmytro Tolokonov on Unsplash for the nice original background photo
Crashing sounds are from Pixabay. 

A shout out to the biggest influences on my Web Dev journey :
Kevin Powell (Youtube, courses on Scrimba and https://www.kevinpowell.co/)
Developed By Ed (Youtube, Udemy, courses at https://developedbyed.com/)
Web Dev Simplified (Youtube, courses at https://courses.webdevsimplified.com/)
Zero To Mastery Academy (school, https://zerotomastery.io/)
Promineo Tech (school, https://promineotech.com/)


_Please enjoy and thanks for checking it out!_

![A list item being removed.](/assets/LTDL-full2.jpg)
