import {addNewUser} from '../controllers/loginController'

let today = new Date();
let todoList = ["Sleep","Eat","?"];
const router = (app)=>{

  app.router("/")
      .get((req,res,next)=>{
          res.render("welcome",  {
            day: today,
            todoList: todoList
          });
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, addNewUser)
      // Post endpoint
      .post(addNewUser)
  
  // });
};




// IIFE (Immediately Invoked Function Expression) ---runs as soon as it is defined. (function () {statements })();
// router.get('/', (req, res) => {
//   console.log('Request for home recieved');
//   res.render('welcome');
// });

// router.get('/user', (req, res) => {
//   console.log('Request for about page recieved');
//   res.render('user',  {
//     day: today,
//     todoList: todoList
//   } );
// });

// router.get('/register', (req, res) => {
//     console.log('Request for about page recieved');
//     res.render('register',  {
//       day: today,
//       todoList: todoList
//     } );
// });




export default router;