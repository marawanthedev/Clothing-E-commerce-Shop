// **AppJs Notes
// **note#1
// fetch to backend
// auth takes a function with a paramter user
// user of auth
// this stay on all the time
// which might cause memory leaks
// so we need to unsub to avoid memory leaks
// this will return a function that closes the sub when we call it

// **note#2
// firebase sends authenticated user as  a func arugment
// and then we could use that arguemnt in our inner call back
// to make changes to the state
// we are getting back a user auth object represinting the current user in auth
// and then passing it to a function that queries something from the doc element
// **note#3
// {
//   /* component to render homepage at default path */
// }
// {
//   /* exact means that path be exactly equal to provided path */
// }
// {
//   /* means that path shall only be equal to the path and can not have othe stuff at it */
// }
// {
//   /* switch is used to avoid rendering anything else other than the component corresponding to the url */
// }
// {
//   /* if many components didnt have exact to true it going to load the first component to be declared
//       its gonna depend on arrangement only */
// }
// {
//   /* switch is so op la */
// }
// {
//   /* router history is only passed to the rendered component component */
// }
// {
//   /* so history doesnt actaully get passed to the sub component of a route component
//       so we need to do it ourselves by passing it as  a prop to the child components */
// }

// **note#4
// **pre redux
// **here where we can get the data of the user
// by that point what am doing here is gettig the data of the
// newely created user or that the user that actually existed before
// simply that means that am getting my data to add to my state
// **in order to display it on the user because later on i will have another collection added ot each user which is gonna be his/her cart items

// **snapshot doesnt actually return data
// it only returns data properties
console.log(snapshot);
// **we could get the data by using snapshot.data()**
console.log(snapshot.data());

//   //** */ using redux now

//   this.props.setCurrentUser({
//     id: snapshot.id,
//     // spreading the rest of the data
//     ...snapshot.data(),
//   });
// });

this.setState(
  // setting the current user to the user in auth
  // user auth in this case is actually null
  { currentUser: userAuth }
);
