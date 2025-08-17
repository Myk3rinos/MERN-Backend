** BASE TEMPLATE FOR A NODE.JS SERVER **
Youtube tutorial: MERN Stack Tutorial for Beginners with Deployment – 2025 
https://www.youtube.com/watch?v=F9gB5b4jgOI&ab_channel=freeCodeCamp.org

All chapters are on different git branches


** PACKAGES **
npm install express
npm install --save-dev nodemon (or npm i nodemon -D) // for development, restarts the server automatically after every change on code
npm install --save-dev dotenv // for environment variables, stores sensitive information
npm install --save-dev cors // for cross origin resource sharing, allows requests from different origins


** ERROR CODES **
1xx : information
2xx : success
    200 : OK
    201 : created
    202 : accepted
    203 : non-authoritative information
    204 : no content
    205 : reset content
    206 : partial content
    207 : multi-status
    208 : already reported
    226 : IM used
3xx : redirection
    300 : multiple choices
    301 : moved permanently // example: http -> https
    302 : found
    303 : see other
    304 : not modified
    305 : use proxy
    307 : temporary redirect
    308 : permanent redirect
4xx : client error
    400 : bad request // example: missing required fields
    401 : unauthorized // example: invalid credentials
    402 : payment required
    403 : forbidden // example: not authorized to access the resource
    404 : not found // example: resource not found or url doesn't exist
    405 : method not allowed // example: using GET instead of POST
    406 : not acceptable
    407 : proxy authentication required
    408 : request timeout
    409 : conflict // example: resource already exists
    410 : gone
    411 : length required
    412 : precondition failed
    413 : payload too large
    414 : uri too long
    415 : unsupported media type
    416 : range not satisfiable
    417 : expectation failed
    418 : i'm a teapot
    421 : misdirected request
    422 : unprocessable entity
    423 : locked
    424 : failed dependency
    425 : too early
    426 : upgrade required
    428 : precondition required
    429 : too many requests // example: too many requests in a certain amount of time
    431 : request header fields too large
    451 : unavailable for legal reasons
5xx : server error
    500 : internal server error
    501 : not implemented
    502 : bad gateway
    503 : service unavailable
    504 : gateway timeout
    505 : http version not supported
    506 : variant also negotiates
    507 :Insufficient storage
    508 : loop detected
    510 : not extended
    511 : network authentication required


** ROUTES **
Endpoints is a combination of a URL and a HTTP method (GET, POST, PUT, DELETE, etc.) that let the client interact with a specific resource on the server.


** PORTS **


** MONGODB **

** RUN SERVER **
npm install
npm run dev

