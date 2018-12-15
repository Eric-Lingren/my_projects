Implement if there is time:
Arduino,
User login,
Journal,
My Gardens,

clientFolder:
    srcFolder:
        App.js
        index.js
        styles.css
        package.json

        componentsFolder:
            Home.js
            Navbar.js
            AddPlantForm.js
            Authentication.js
            garden.js
            plant.js
            PlantList.js -- to map through plant database and dispay in a dropdown
            MyGardensList.js -- To map through garden database and display in a dropdown
            Journal.js  -- Calendar functionality for notes
            Arduino.js  --  Add input to database from arduino systems
            
        contextFolder:
            PlantProvider.js -- for global methods and state
        sharedFolder:
            ?????
    Models:
        plant.js -- Outlines the schema for each plant
        garden.js
        user.js -- Outlines the schema for users
        authentication.js --  Outlines schema for login credentials
    Routes:
        plant.js -- Provides pathways to datbase for adding plants
        user.js -- Provides pathways to datbase for users
        authenticaton.js -- Provides pathways to datbase for user authentication
server.js

//  How to organize the databases?
        We will need:
        one to one???? 
            plant list / My Gardens Database / plants
            Plants database
            Ardunio Database
            Previous Years Database
            Future Year Garden Creation Somehow...  
                    //Is this a database, or js logic..?
