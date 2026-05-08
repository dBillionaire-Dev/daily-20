# Controllers in Nest.js

A controller in nestjs is used to handle incming requests from the client, and sending back responses.

example
                          ________ Controller
                         |
                         |
                         |
            HTTP Request |
    Client --------------|--------> Controller
                         |
                         |
                         |
                         |_________ Controller                  

A controller's work is to handle specific requests for the application, the routing mecahanism determines which controller handles which request.
Often times a controller has multiple routes and each route can perform different action. To create a basic controller we use classes and decorators.

## Routing
