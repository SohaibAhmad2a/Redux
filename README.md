# Installations
I pushed only those files that I changed. If you want to run these files, first initiate the react library in any directory, then paste these files in the src folder. Now install react and react-redux libraries, they can be installed separately as well as together through the command <em>npm install redux react-redux</em>. Once it is done, then run "npm start" in cmd.
# How to Manage State Using Redux and React-Redux?
Redux is use to manage state globally. To understand how redux works, start with the file index.js. Two components \<App /> and \<App1 /> are rendered in index.js, only understand anyone of the two in order to find out how redux works. I only rendered two components, \<App /> and \<App1 />, to show that initial state while creating reducer can or can't be an object. 
To avoid any confusion just understand anyone of the two components. There are five main parts to use Redux.
* **Store Creation:** Create store using createStore hook provided by redux library, createStore will take reducer as an input. This step is performed in store.js.
* **Provider:** The store is assigned to the function components, \<App /> and \<App1 />, using Provider tag given by react-redux. 
* **Reducer Function:** Write the reducer function. This step is performed in counterReducer.js.
* **Changing State:** In order to change the state, you need to pass the action, which is just an object, through useDispatch hook to reducer function.
It is performed in counterInput.js. useDispatch will be provided by react-redux library.
* **Access State from Store:** useSelector hook will be used to get the state from the store. useSelector will be provided by react-redux library.
