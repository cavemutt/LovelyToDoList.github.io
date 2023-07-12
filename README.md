# LovelyToDoList.github.io

This started with a nice to-do list app tutorial from the Creative Javascript course by DevelopedByEd. His app included basic list input, basic local storage and filtering the displayed list for completed/not completed/all items.

I added many features on my own.

The styling is all original, including the CSS animated background using a photo broken into parts and svg's with custom CSS variables.
-The animated background, including the leaves and moving blur-sparkles, is all done in the CSS, leaving the Javascript to only have to deal with the app's functionality. *Thanks to Dmytro Tolokonov on Unsplash for the nice original background photo!*


Functionality added includes :
-A welcome modal to take the current user's name, and putting that in local storage.

-Local storage saving user's name, if list items are marked completed and items deleted immediately removed from storage.

-Defaults set for if a name or list input is not given by the user, also going into local storage. My cat chose the randomly selected default list items, and he chose the most important things to not forget.

-If a list item entered is a repeat of what's already on the list, a default string "again" is added to the list item text, also reflected in local storage.

-Retrieval of all new functionalities from local storage and restoral of data as it was, in order, on load and refresh.

-Prevent default added where needed to improve functionality.

-A paragraph showing how many items in total are on the list as it is updated, with a congrats message if you empty your list.

-A Reset of all of the current user's data and the local storage, a warning modal to make sure the reset is wanted,
returning to current list if "no, thank you" is chosen, and resetting if "yes" is chosen with a final alert that the data is being reset.

-Fun sounds playing when a list item is deleted, one of three chosen randomly, as well as an enhancement on the animation of the item.

-I set the overflow scrollbar width to 0 to prevent the screen from shifting on the item delete animation.

-There is one media query to make this app responsive and one to reduce motion if that is the user preference.

In the future would like to make this app more screen-reader friendly, add dates for when items are added and completed, and set the cursor in appropriate areas. 
These are on my own To-Do List, har har.

Please try it out and enjoy!
