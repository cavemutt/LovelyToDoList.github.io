# LovelyToDoList.github.io

While increasing my understanding of Javascript, I followed a nice to-do list app tutorial from the Creative Javascript course by Developed By Ed, or DevEd. The updated course can be found on his website and he has many educational (and funny) videos on Youtube. 
The tutorial showed taking input, creating a list, added buttons for delete and complete, local storage for the list, 
filtering the list, and a basic styling.

Testing my apparent enjoyment of staring intensely at a computer screen while my overheating brain cells and google fingers find ways to make things work),
I added many features on my own.

My additions include :
-A welcome modal to take the current user's name, and putting that in local storage.

-Local storage reflects my additions as well as if list items marked as completed and completed items deleted being removed from storage.

-Defaults set for if a name or list input is not given by the user, also going into local storage. My cat chose the randomly selected list items (if left blank).

-If a list item entered is a repeat of what's already on the list, "again" is added to the list item text, also reflected in local storage.

-Retrieval of all new functionalities from local storage and restoral of data as it was on load and refresh.

-A paragraph showing how many items in total are on the list as it is updated, with a flattering message if you clear your list.

-A button to reset all of the current user's data and the local storage, on click a warning modal to make sure the reset is wanted,
returning to current list if "no, thank you" is chosen, and resetting if "yes" is chosen with a final alert that the data is being reset.

-Fun sounds playing when a list item is deleted, one of three chosen randomly, as well as an enhancement on the animation of the item.

-The animated background, including the leaves and moving blur-sparkles, is all done in the CSS, leaving the Javascript to only have to deal with the app's functionality. *Thanks to Dmytro Tolokonov on Unsplash for the nice original background photo!*

-Some defaults were prevented to increase functionality.

-I set the overflow scrollbar width to 0 to prevent the screen from shifting on the item delete animation.

-There is one media query to make this app responsive and one to reduce motion if that is the user preference.

In the future would like to make this app more screen-reader friendly, add dates for when items are added and completed, and set the cursor in appropriate areas,  
these of which are on my own To-Do List, har har.

Please try it out and enjoy!
