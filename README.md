# ToDoList
ToDoList

AAAND issa wrap! It took around 13 hours, it sounds long, because I got carried away :)

There were a few obstacles I encountered.
Here by I write them in detail.

1. saveToDo function - Finding a solution to save the user-edited text was a challenge. By using filter function, assigned the new text.
2. doneDos array - The problem was simple, that if you save the filtered toDos inside of the doneDos,then it is array inside of an array. The solution was to choose specific object from the filtered toDos array => doneDos.push(moveToDo[0]);
3. checkToDo function - updating the localStorage based on the updated object was challenging. Solved with filter function.

    a. Storing doneDo to doneDos array
    b. Delete the checked: true obejct from the toDos key 
                        
4. click event on button - Because it was icon inside of button, based on where you click, the event could not always find its target. The solution was simple, instead of event.target, it is event.currentTarget                        

//What can I improve for the future?
1. The smallest window size layout could improve, now the task text and buttons go in 2 lines, where buttons are stacking.
2. The text could go on, which creates a messy layout. It would be great to come up with the solution where you limit, 
   maybe use slice function.
3. Refactor the function, especially checkToDo, paintToDo, paintDoneDo functions could be simplified.
