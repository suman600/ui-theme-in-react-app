# Getting Started setup bootstap UI theme in React JS

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# React App UI theme Folder/Directory Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, UI Components etc.
    +-- imgges        # imaegs forlder contain all images file. we can add any folder inside images folder
    +-- ui-theme      # ui-theme folder contain all ui file and folder.
        +-- mixing    # mixing folder contain all ui mixing custon and bootstrap mixing.
            +-- files.scss/less     # add all mixing file inside mixing folder. 
        +-- utilites  # uitilities folder contain all ui theme utilization files.
            +-- uitilities-files.scss/less      #add all uitilities files inside utilites folder. 
        +-- vender     # vendor file contain rfs file for maintain ui component.
            +-- rfx.scss/less   #rfx file manages all ui component.
        +-- custom     # shared components used across the entire application.
            +--files.scss/less      # add shred file inside custom folder.
        +-- includes    # includes folder container specific file for include any custiom files.
            +-- file.scss/less      # add any specific file for use anyware.
        +-- components.scss/less   # add all ui components file inside ui-theme folder include variable files.
    +-- font            # font folder contain all web theme fonts file.
        +-- font.ttf/otf/woff/eot   # add all font files inside font folder 
    +-- lang            # lang folder contain all lang files.
        +-- lang.json/hindi/english/etc   # add all lang files inside lang folder.  
+-- app.js
+-- index.scss/less     # add all componets (scss/less) file in which ui theme folder
        +-- variable.scss/less
        +-- mixing.scss/less
        +-- function.scss/less
        +-- components.scss/less



**Feel free to comment. I would like to know how do you structure React Apps.**