*English*
***
# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning the repository, open the directory with a terminal and execute the command:

### `npm install`

This command line will install all project dependencies/modules listed in the "package.json" file.

To initialize the project locally, with Node installed and script execution set to **RemoteSigned** ([click here](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3), to know more about it), open the current directory with a terminal and execute the command down below:

### `json-server -w src/database/db.json`

This command will run the fake database on http://localhost:8080, where the application will fetch the data from.

Then, open another terminal and execute the command:

### `npm start`

Then follow the terminal instructions.
This command will run the app in development mode.\
Open http://localhost:3000 to visualize it in the browser.\
The page will apply the changes if you make edits.
Any lint errors could be seen in the development console.

<br>

# Directory

> ### Directory "public"
> 
>Has the files that regard the site's base, like browser visualization, title, icon (favicon), language, and metadata.

> ### Directory "src" (source)
> 
> In this folder, you can find the assets, components, database, RecoilState, utils, views, routes, the container, and the application running inside of it;
>
>> **assets**: The "assets" directory has the images that appear on the page. The application imports all images used from it;
>
>> **Components**: This directory has "modules" contained on all routes, in this context, *header*, and *footer*;
>>
>>> 1. **header**: Contains the site logo, the navigation bar with all routes, and the teme selector, both light and dark mode;
>>
>>> 2. **footer**: Contains the developers logo, an informative text, and the website creator's social media (screen resolution may affect the visualization of this data).
>
>> **database**: This directory has the "db.json" file that contains all data used by the application and a backup.json, both including the brands, vehicles, and formats;
>
>> **RecoilState**: Contains an "atom.ts" file that stores state constraints called atoms by the Recoil library, also having a hooks folder with custom hooks;
>>
>>> 1. hooks/use: Has functions that return the content and a set of theme state.
>>
>
>>**utils**: This folder contains *functions*, *interfaces*, and *styles* of general use through the application.
>>
>>> 1. **axios**: Has the axios instance that connects to the fake database;
>>
>>> 2. **functions**: Has one function responsible for inverting the theme state value;
>>
>>> 3. **models**: Has the compost data types used through the application;
>>
>>> 4. **styles**: Contains an "scss" file that stores style variables used in component modules through the application.
>>
>
>> **Views**: These are components that represent a route itself, sorting its internal components and displaying them on the screen;
>>
>>> 1. **about**: Displays information about all brands stored in the database, including their name, logo, and description;
>>
>>> 2. **add**: Displays two forms that can be used to add a new brand and  a new vehicle to a brand saving this data in the database;
>>
>>> 3. **home**: Displays the main page of the application, that renders three internal components:
>>>
>>>> 1. **formats** component that show a list of every vehicle format in the database;
>>>
>>>> 2. **brands** component that show a list of every brand in the database that match the selected format;
>>>
>>>> 3. **vehicles** component that show a list of every vehicle in the database that match the selected brand and format.
>>
>>> 4. **NotFound**: Displays the famous error 404 page when the searched route is invalid.
>>
>

> ### json-server.json (file)
>
> Contains the port configuration of the fake database.
>

***

# App Style

> Dark Mode pallet:
> 
>> cor-principal: ${\color{#aebdca}\#aebdca}$
>
>> cor-secundaria: ${\color{#6988a4}\#6988a4}$
>
>> branco: ${\color{#ffffff}\#ffffff}$
>
>> cor-botao: ${\color{#1e89d6}\#1e89d6}$
>
>> fundo-escuro: ${\color{#202124}\#202124}$
>

> Light Mode pallet:
>
>>contra-fundo: ${\color{#e3ddd0}\#e3ddd0}$
>
>>fundo-claro: ${\color{#f5efe6}\#f5efe6}$
>
>>cor-botao: ${\color{#1e89d6}\#1e89d6}$
>