# LovelyToDoList.github.io

While increasing my understanding of Javascript, I followed a nice to do app tutorial from the Creative Javascript course by Developed By Ed, or DevEd. The course can be found on his website and on Udemy, and he has many instructive and funny videos on youtube. 
The tutorial showed taking input, creating a list, added buttons for delete and complete, local storage for the list, 
filtering the list, and a basic styling.

Testing my prowess (and apparent need to stare intensely at a screen while my overheating brain cells and google fingers find ways to make things work)
I added many features and nice animated background (code for the Lovely Leaves Animated Background is also in my repo list).

The animated background is all done in the CSS, leaving the Javascript with the functionality.

My additions include :
A welcome modal to take the current user's name, and putting that in local storage.

Local storage of list items marked as completed, as well as completed items deleted being removed from storage.

Defaults set for entering a blank name or list input(chosen randomly), also going into local storage.

If a list item entered is a repeat of what's already on the list, "again" is added to the list item text, also reflected in local storage.

Retrieval of all new functionalities from local storage and restoral of data as it was on load and refresh.

A paragraph showing how many items in total are on the list as it is updated, with a flattering message if you clear your list.

A button to reset all of the current user's data and the local storage, on click a warning modal to make sure the reset is wanted,
returning to current list if not and resetting if yes is chosen, with a final alert of the data being reset.

Fun little sounds randomly chosen from an array, playing when a list item is deleted, as well as an enhancement on the animation of the item.

I prevented defaults to get things to work.
I set the overflow scrollbar width to 0 to prevent the screen from shifting on the item delete animation.

There is one media query to make this app responsive and one to reduce motion if that is the user preference.

I would like to make this app more screen-reader friendly, and set the cursor in appropriate areas,  
these of which are on my own To-Do List, har har.

Please try it out and enjoy! Thanks to Dmytro Tolokonov on Unsplash for the original background photo.
