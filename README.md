# ToDoList
ToDoList

AAAND issa wrap! It took around 13 hours, it sounds long, because I got carried away :)

There were a few obstacles I encountered.
Here by I write them in detail.

1. saveToDo function - Finding a solution to save the user-edited text was a challenge. Solved with filter function, assigned the new text to filtered toDo. 
2. doneDos array - The problem was simple, if you save the filtered toDos inside of the doneDos, then it is an array inside of an array. The solution was to choose specific object from the filtered toDos array and push that into doneDos array. Ex) doneDos.push(moveToDo[0]);
3. checkToDo function - updating the localStorage based on the updated object state was challenging. Solved with filter function.

    1) Storing doneDo to doneDos array.
    2) Delete the obejct from the toDos key when it has been checked and move to doneDos key. 


4. click event on button - Because there was an icon inside of a button, based on where you click, the event could not always find its target. The solution was simple, instead of event.target, used event.currentTarget  
5. Layout for smaller window size, each button would stack under the task based on how smaller the window size gets - solved by using media query and flex-direction to wrap the whole buttons span down when the width of the card is too small.

//What can I improve in the future?
1. When the user edit the text, it could be edited to the point where it breaks the layout, which creates a messy layout. It would be great to come up with the solution where you limit, maybe use slice function.
2. Refactor the function, especially checkToDo, paintToDo, paintDoneDo functions could be simplified.
