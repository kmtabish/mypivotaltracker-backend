# Steps to Run Pivotal tracker API
- clone the repo 
- run **npm install**
- run **npm install** https://github.com/kmtabish/pivotaltracker/tarball/master
(It will add the custom pivotal tracker module. this module will only give the top 20 epics. initially it was fetching all the epics which was time taken and some time it give request time out error also)

## Run the project 
You can run the project in both the ways, using User ID and password and using Tocken. For token based api you need to the following things: 
- **node appid**  -------------------it will run on 3001 port
- **Api to get the Project** http://localhost:3001/project/{tokenId}
- **Api to get the Epics** http://localhost:3001/epics/{tokenId}/{projectId}
- **Api to get the the specific Epic** http://localhost:3001/epics/{tokenId}/{projectId}/{epicId}
