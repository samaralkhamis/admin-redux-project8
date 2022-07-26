
import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {emailORUsername,login, password} from "../store/actions/loginAction";

function Login(){
    const dispatch=useDispatch();
    
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }

    return(

      <section class="vh-100" style={{backgroundColor: '#eee4e7'}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: '1rem'}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=2000"
                alt="login form" class="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form  onSubmit={(e)=>Fun(e)}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your Dashbord</h5>

                  <div class="form-outline mb-4">
                    Email address 
                    <input type="email" id="form2Example17" class="form-control form-control-lg" onChange={(e)=>dispatch(emailORUsername(e.target.value)) } />
                    <label class="form-label" for="form2Example17">
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27" >Password</label>
                    <input type="password" id="form2Example27" class="form-control form-control-lg"  onChange={(e)=>dispatch(password(e.target.value))}/>
                    
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    // <div className='container'>
    //   <section className="vh-100">
    //   <div className="container-fluid h-custom">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-md-9 col-lg-6 col-xl-5">
    //         <img src="https://airproductionservice.com/wp-content/uploads/2021/05/Login.jpg"
    //           className="img-fluid" alt="Sample image" />
    //       </div>
    //       <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    //         <form  onSubmit={(e)=>Fun(e)}>
    //         <fieldset>
    //         <legend>Login:</legend>
          /* Email input */
//           <div className="form-outline mb-4">
//           <label className="form-label" htmlFor="form3Example3">
//               Email address
//             </label>
//             <input
//               type="email"
//               id="form3Example3"
//               className="form-control form-control-lg"
//               placeholder="Enter a valid email address"
//               onChange={(e)=>dispatch(emailORUsername(e.target.value))}
//             />
//           </div>
//           {/* Password input */}
//           <div className="form-outline mb-3">
//           <label className="form-label" htmlFor="form3Example4">
//               Password
//             </label>
//             <input
//               type="password"
//               id="form3Example4"
//               className="form-control form-control-lg"
//               placeholder="Enter password"
//               onChange={(e)=>dispatch(password(e.target.value))}
//             /> 
//           </div>
//           <div className="d-flex justify-content-between align-items-center">
       
            
//           </div>
//           <div className="text-center text-lg-start mt-4 pt-2">
//             <input
//             defaultValue="Login"
//               type="submit"
//               className="btn btn-primary btn-lg"
//               style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
//             />
            
//           </div>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   </div>
 
    
// </section>
// </div>
   
 )
}

export default Login;