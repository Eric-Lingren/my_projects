const reloadList = function () {
    axios.get('https://api.vschool.io/ericlingren/todo').then(function(response){
        var listArray = response.data
        pullArray(listArray)
    }).catch(function(error){
        console.log(error);
});
}

function pullArray (listArray){
    for (let i = 0; i < listArray.length; i++) {
        let toDoId = listArray[i]._id
        const toDoContainer = document.createElement('div');
        toDoContainer.classList.add('todo');
        toDoContainer.setAttribute('id', toDoId[i]);

            //  Create HTML elements for Text
        var title = document.createElement('h3');
            title.classList.add ('title');
        var description = document.createElement('p');
            description.classList.add ('description');
        var price = document.createElement('p');
            price.classList.add ('price');
        var isCompleted = document.createElement('p');
            isCompleted.classList.add ('completed');

            //Created a complete item button
        var completeButton = document.createElement('img');
            completeButton.setAttribute('src', 'css/images/complete.png');
            completeButton.classList.add ('completeButton');
        var completeText = document.createTextNode('Complete');
            completeButton.appendChild(completeText);
            completeButton.id = toDoId;


        /////////////////////////////////////////////////////////
        ///      WHEN THE COMPLETE BUTTON GETS CHECKED       ///
        ///////////////////////////////////////////////////////

        //creates a function to change record between completed and not completed
        completeButton.addEventListener('click', function(){
            if(listArray[i].completed === false) {
                axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, { completed: true} ).then(function(response){
                    document.getElementById('list-container').innerHTML = '';
                    document.getElementById('list-container').innerHTML = `<h2> To Do:</h2>`;
                    document.getElementById('done-container').innerHTML = '';
                    document.getElementById('done-container').innerHTML = `<h2> Done:</h2>`;
                    reloadList()
                    console.log(response.data);
                });
            } else {
                axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, { completed: false} ).then(function(response){
                    document.getElementById('list-container').innerHTML = '';
                    document.getElementById('list-container').innerHTML = `<h2> To Do:</h2>`;
                    document.getElementById('done-container').innerHTML = '';
                    document.getElementById('done-container').innerHTML = `<h2> Done:</h2>`;
                    reloadList()
                    console.log(response.data);
                });
            }   
        });
    
         //  Creates an edit item button
         var editButton = document.createElement('img');
            editButton.setAttribute('src', 'css/images/edit.png');
            editButton.classList.add ('editButton');
         var editText = document.createTextNode('edit');
            editButton.appendChild(editText);
            editButton.id = toDoId;

        //  Creates an publish item button
        var publishButton = document.createElement('img');
            publishButton.setAttribute('src', 'css/images/publish.png');
            publishButton.classList.add ('publishButton');
        var publishText = document.createTextNode('publish');
            publishButton.appendChild(publishText);
            publishButton.id = toDoId;
            publishButton.style.display = 'none';


          //////////////////////////////////////////////////////////////
         ///   To Create the edit fields for the to do list item    ///
        //////////////////////////////////////////////////////////////

            // Creates a form in the div that allows input to edit
        let editForm = document.createElement('form');
            //Sets the name for the new form
        editForm.setAttribute('name', 'editForm');
        toDoContainer.appendChild(editForm);

            //  Creates the edit fields for the item title title
        let editTitle = document.createElement('input');
            //Sets the name for the new title input field in the form
        editTitle.setAttribute('name', 'editTitle');
            //  Sets the placeholder in the new title input
        editTitle.setAttribute('placeholder', listArray[i].title);
        editTitle.classList.add ('editTitle');
        editTitle.value = listArray[i].title;
            //  Hide the element when it is created
        editTitle.style.display = 'none';

            //  Creates the edit fields for then item description
        let editDescription = document.createElement('input');
            //Sets the name for the new description input field in the form
        editDescription.setAttribute('name', 'editDescription');
            //  Sets the placeholder in the new description input
        editDescription.setAttribute('placeholder', listArray[i].description);
        editDescription.classList.add ('editDescription');
        editDescription.value = listArray[i].description;
            //  Hide the element when it is created
        editDescription.style.display = 'none';

            //  Creates the edit fields for price
        let editPrice = document.createElement('input');
            //Sets the name for the new Price input field in the form
        editPrice.setAttribute('name', 'editPrice');
            //  Sets the placeholder in the new Price input
        editPrice.setAttribute('placeholder', listArray[i].price);
        editPrice.classList.add ('editPrice');
        editPrice.value = listArray[i].price;
            //  Hide the element when it is created
        editPrice.style.display = 'none';

            //  Creates the edit fields for Image
        let editImage = document.createElement('input');
            //Sets the name for the new Image input field in the form
        editImage.setAttribute('name', 'editImage');
            //  Sets the placeholder in the new Image input
        editImage.setAttribute('placeholder', listArray[i].imgUrl);
        editImage.classList.add ('editImage');
        editImage.value = listArray[i].imgUrl;
            //  Hide the element when it is created
        editImage.style.display = 'none';

            //  Adds the newly created form elements into the form
        editForm.appendChild(editTitle);
        editForm.appendChild(editDescription);
        editForm.appendChild(editPrice);
        editForm.appendChild(editImage);
        editForm.appendChild(publishButton);


    ////////////////////////////////////////////////////////////////////////////
    ///              WHEN THE EDIT BUTTON GETS CLICKED                      ///
    //////////////////////////////////////////////////////////////////////////

            //  Creates a function to change the text to an input box
        editButton.addEventListener('click', function(){
                //   Hides edit button
            this.parentNode.children[6].style.display = 'none';
                //  Displays publish button
            this.parentNode.children[9].style.display = 'block';
                // Hides Title
            this.parentNode.children[1].style.display = 'none';
                //  Hides Description
            this.parentNode.children[2].style.display = 'none';
                //  Hides price
            this.parentNode.children[3].style.display = 'none';
                // Hides URL
            this.parentNode.children[4].style.display = 'none';

                //  Shows the edit form elements in the page
            editTitle.style.display = 'block';
            editDescription.style.display = 'block';
            editPrice.style.display = 'block';
            editImage.style.display = 'block';
        });
 

        const titleDiv = document.getElementById('title')
        const myH1Tag = document.createElement('h1');
        const myH1Text = document.createTextNode('Hello World');
        myH1Tag.appendChild(myH1Text);
        titleDiv.appendChild(myH1Tag);
       
        const titleDiv = document.getElementById('title')
        titleDiv.addEventListener('click', ericsFunction)
        function ericsFunction() {
            console.log('Hello World')
        }



    ////////////////////////////////////////////////////////////////////////////
    ///           WHEN THE PUBLISH BUTTON GETS CLICKED                      ///
    //////////////////////////////////////////////////////////////////////////

         publishButton.addEventListener('click', function(){
                //  Shows edit button again
            this.parentNode.children[6].style.display = 'block';
                //  Hides publish button
            this.parentNode.children[9].style.display = 'none';

                //  Hides the to edit items form again
            editTitle.style.display = 'none';
            editDescription.style.display = 'none';
            editPrice.style.display = 'none';
            editImage.style.display = 'none';

                // Re-displays Item Title
            this.parentNode.children[1].style.display = 'block';
                //  Re-displays Item Description
            this.parentNode.children[2].style.display = 'block';
                //  Re-displays Item Price
            this.parentNode.children[3].style.display = 'block';
                // Re-displays Item Completed Status
            this.parentNode.children[4].style.display = 'block';

                //  Sets the user input to a variable value for the object below
            var editInputTitle = editForm.editTitle.value;
            var editInputDescription = editForm.editDescription.value;
            var editInputPrice = editForm.editPrice.value;
            var editInputImage = editForm.editImage.value;

                //  Creates the edit object for axios to push to the server
            var editToDo = {};
            editToDo.title =  editInputTitle;
            editToDo.description =  editInputDescription;
            editToDo.price =  editInputPrice;
            editToDo.imgUrl =  editInputImage;

                //  Pushes the users updates to the server
            axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, editToDo).then(function(response){
                document.getElementById('list-container').innerHTML = '';
                document.getElementById('list-container').innerHTML = `<h2> To Do:</h2>`;
                document.getElementById('done-container').innerHTML = '';
                document.getElementById('done-container').innerHTML = `<h2> Done:</h2>`;
                reloadList()
                console.log(response.data);
            });
        });

            // Creates a delete button
        var deleteButton = document.createElement('img');
            deleteButton.setAttribute('src', 'css/images/delete.png');
            deleteButton.classList.add ('deleteButton');
        var deleteText = document.createTextNode('delete');
            deleteButton.appendChild(deleteText);
            deleteButton.id = toDoId;

        ///////////////////////////////////////////////////////////
        ///      WHEN THE DELETE BUTTON GETS CLICKED           ///
        /////////////////////////////////////////////////////////

            //creates a function to delete record when clicked
        deleteButton.addEventListener('click', function(){
            axios.delete(`https://api.vschool.io/ericlingren/todo/${this.id}`).then(function(response){
                console.log(response.data);
                    // Live reload page
                document.getElementById('list-container').innerHTML = '';
                document.getElementById('list-container').innerHTML = `<h2> To Do:</h2>`;
                document.getElementById('done-container').innerHTML = '';
                document.getElementById('done-container').innerHTML = `<h2> Done:</h2>`;
                reloadList()
                });
        });

            //  Adds an image to the div element
        var image = document.createElement('img');
            image.setAttribute('src', listArray[i].imgUrl);
            image.classList.add('urlimage');
        
            //  Doesnt display the broken image link if the image has no image.
        if(!listArray[i].imgUrl) {
            image.style.display='none';
        } 

            //  Put the to-do items inside the div element
        title.textContent = listArray[i].title;
        description.textContent = listArray[i].description;
        price.textContent = (`Price: ${listArray[i].price}`);
        isCompleted.textContent = (`Completed: ${listArray[i].completed}`);

            // Put the element on the DOM
        toDoContainer.appendChild(title);
        toDoContainer.appendChild(description);
        toDoContainer.appendChild(price);
        toDoContainer.appendChild(isCompleted);
        toDoContainer.appendChild(completeButton);
        toDoContainer.appendChild(editButton);
        toDoContainer.appendChild(deleteButton);
        toDoContainer.appendChild(image);
        toDoContainer.appendChild(publishButton);

            //  Check to see if the item has been completed.  If so, it changes the styling to cross off the item.  Also changes container.
        if (isCompleted.textContent === 'Completed: true'){
            title.style.textDecoration = 'line-through'
            title.style.color = 'black'
            isCompleted.style.color = 'black'
                // Places item in the done container if it is marked completed
            document.getElementById('done-container').appendChild(toDoContainer);
        }  else {
            title.style.color = 'black'
                // Places item in the to-do container if it has not been completed
            document.getElementById('list-container').appendChild(toDoContainer);
        }
    }
}

var form = document.listForm;
   
form.addEventListener('submit', function(event){
    event.preventDefault();
        //  Pulls the users input data for a new item into varibles
    var inputTitle = form.title.value;
    var inputDescription = form.description.value;
    var inputPrice = form.price.value;
    var inputImage = form.image.value;
    var inputComplete = form.complete.checked;

        //  Creates an object for a newly created item to push to the database
    var newToDo = {};
        newToDo.title =  inputTitle;
        newToDo.description =  inputDescription;
        newToDo.price =  inputPrice;
        newToDo.imgUrl =  inputImage;
        newToDo.completed =  inputComplete;

        // Posts the new item to the database
    axios.post('https://api.vschool.io/ericlingren/todo', newToDo).then(function(response){
            //  Live reload and resets data   
        document.getElementById('list-container').innerHTML = '';
        document.getElementById('list-container').innerHTML = `<h2> To Do:</h2>`;
        document.getElementById('done-container').innerHTML = '';
        document.getElementById('done-container').innerHTML = `<h2> Done:</h2>`;
        reloadList()
        console.log(response.data);
    });
});

    //  Pulls the data from the server on page load
reloadList();




    ///////////////////////////////////////////////////////////////
   ///            TRIED TO IMPLEMENT DRAG AND DROP             ///
  ///  BUT HAD A LOT OF BUGS WITH THE LOOP I COULDNT RESOLVE  ///
 ///                  Maybe fix this later...                ///    
///////////////////////////////////////////////////////////////

//toDoContainer.setAttribute('draggable', true);
// //  add drag listeners
// toDoContainer.addEventListener('dragstart', dragStart);
// toDoContainer.addEventListener('dragend', dragEnd);

// //  Create empty recieving containers in the 'to-do' category
// let listContainer = document.getElementById('list-container');
// let empties3 = document.createElement('div');
// empties3.classList.add('snap')
// empties3.addEventListener('dragover', dragOver);
// empties3.addEventListener('dragenter', dragEnter);
// empties3.addEventListener('dragleave', dragLeave);
// empties3.addEventListener('drop', dragDrop);
// listContainer.appendChild(empties3);

// //  Create empty recieving containers in the 'in-progress' category
// let inProgress = document.getElementById('inProgress-container');
// let empties2 = document.createElement('div');
// empties2.classList.add('snap')
// empties2.addEventListener('dragover', dragOver);
// empties2.addEventListener('dragenter', dragEnter);
// empties2.addEventListener('dragleave', dragLeave);
// empties2.addEventListener('drop', dragDrop);
// inProgress.appendChild(empties2);

// //  Create empty recieving containers in the 'done' category
// let doneContainer = document.getElementById('done-container');
// let empties = document.createElement('div');
// empties.classList.add('snap')
// empties.addEventListener('dragover', dragOver);
// empties.addEventListener('dragenter', dragEnter);
// empties.addEventListener('dragleave', dragLeave);
// empties.addEventListener('drop', dragDrop);
// doneContainer.appendChild(empties);

// //  Initialize Drag and Drop Functions
// function dragStart(){
//     setTimeout(() => this.className = 'invisible', 0);  
// }

// function dragEnd(){
//     this.className = 'todo';
// } 

// function dragOver(e){
//     e.preventDefault(); 
// }

// function dragEnter(e){
//     e.preventDefault();
//     this.className += ' hovered';
// }

// function dragLeave(){         
//     this.className = 'snap';            
// }

// function dragDrop(){
//     this.className = 'none';
//     this.append(toDoContainer);  
// }

