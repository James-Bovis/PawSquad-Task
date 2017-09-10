# PawSquad - Front End Developer Task
This repo contains the submission of my developer task for a front-end-developer position at PawSquad.

A online version of this task can also be found at http://pawsquad.jamesbovis.com

## Getting started
To clone this repo, run ```git clone https://github.com/James-Bovis/PawSquad-Task.git``` into your terminal.

When the project has been downloaded, move into the folder by typing ```cd PawSquad-Task```. Now, once your in the PawSquad-Task folder, type ```npm install``` into the terminal to download the dependencies.

Once finished, typing ```gulp``` will fire up a local web-server, compile the SCSS stylesheets and open up a new browser window serving the files from the ```build``` folder. Any changes that are made to both the ```index.html``` and any of the SCSS files, the browser window will be refreshed automatically.

To produce the production folder ```dist``` simply run ```gulp build``` and the process should start running. This process compresses the images, copies over the other files and prepares them for production.

## Other tasks
```gulp clean:dist``` - This will delete everything in the "dist" folder

```gulp images``` - This will optimize all of the imagery in the "img" folder

```gulp copy-index``` - This will copy the "index.html" file into the "dist" folder

```gulp copy-audio``` - This will copy audio files into the "dist" folder

```gulp copy-css``` - This will copy the "style.css" file into the "dist" folder

## Questions
If you have any questions, please feel free to email me at hello@jamesbovis.com.

Thanks,
James
