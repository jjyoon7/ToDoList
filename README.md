# ToDoList
ToDoList

AAAND issa wrap! It took around 13 hours, it sounds long, because I got carried away :)

There were a few obstacles I encountered.
Here by I write them in detail.

1. saveToDo function - Finding a solution to save the user-edited text was a challenge. Solved with filter function, assigned the new text to filtered toDo. 
2. doneDos array - The problem was simple, if you save the filtered toDos inside of the doneDos, then it is an array inside of an array. The solution was to choose specific object from the filtered toDos array and push that into doneDos array. Ex) doneDos.push(moveToDo[0]);
3. checkToDo function - updating the localStorage based on the updated object state was challenging. Solved with filter function.

a. Storing doneDo to doneDos array.
b. Delete the checked toDo: true obejct from the toDos key. 
                        
4. click event on button - Because there was an icon inside of a button, based on where you click, the event could not always find its target. The solution was simple, instead of event.target, used event.currentTarget                        

//What can I improve for the future?
1. The smallest window size layout could improve, now the task text and buttons go in 2 lines, where buttons are stacking.
2. When the user edit the text, it could be edited to the point where it breaks the layout, which creates a messy layout. It would be great to come up with the solution where you limit, maybe use slice function.
3. Refactor the function, especially checkToDo, paintToDo, paintDoneDo functions could be simplified.
