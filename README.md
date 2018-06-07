# React Polls

This project is a very simple React/Redux system that lets users vote through a Polls API.
Documentation for the API is available at http://docs.pollsapi.apiary.io/.

The application starts and the user can see a list of questions.
The user can select any of the questions and vote. One can vote for each question as many times wishes.
The user has the possibility to create new questions which then also can be part of the poll.

Every visual elements is regular pure CSS.
The application works for both Desktop and Mobile

## Instructions how to run

You can find a live version of the application [here](https://a-very-simple-poll-system-fxisgbwjzj.now.sh).

### To run locally :

1. `git clone https://github.com/paschalidi/BCGDV-coding-challenge.git`
2. `cd BCGDV-coding-challenge`
3. `npm install`
4. `npm run dev`

### To run tests :

1. `npm run test`

## TODOS :

* Would be better if when user creates new question there is a more complex validation system
  * not same vote choice twice

* Design was made relatively quickly, it could be greatly improved.



## EXTRAS :

As boilerplate I used [Nextjs](https://github.com/zeit/next.js). Next.js is a lightweight framework for static and server‑rendered applications. 

#### Project Structure and modeling decisions

* The application is consistent of 2 pages. Pages can be found in the folder `./pages`

  * `pages/index.js` contains the list of the available questions that are being exposed from [the api](http://docs.pollsapi.apiary.io/).
    * a user can select one question and then navigate to its details or can create a new question that will then be `post`ed at the Polls API and queried back for him to view.
  * `pages/question.js` cointains the details of the question. Also gives the ability to the user to vote agains the existing. choices.

* `POST`ING a new question && `POST`ING a vote

  * the logic behind posting a new question to the server and posting a vote to the server is the same.

    1. when `pages/index` or `pages/question` is being loaded (at `componentWillMount()`) the data are being saved in `redux` state.

    2. when user interacts with `post`ing anything steps are the following

       1. loading is being triggered (simply css for the user to understand she/he has to wait)
       2. the request is being sent to the server
       3. the new state is being saved at `redux`
       4. loading turned off.

       This way there is consistant between the API and the view of the application.
     
     
**IMPORTANT NOTE: the api of Polls is not the most consistant. 
There are times that returns wrong values and as a result user might not see the latest action she/he made. 
We dont consider this a frontend bug  but one that relates to the API.**


