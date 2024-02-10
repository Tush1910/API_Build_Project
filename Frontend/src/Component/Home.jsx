import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         <div class="card m-auto mt-5" style={{width: '30rem'}}>
            <form action="">
                    <div class="card-body">
                        <h2 class="card-title">Welcome User</h2>
                            <div class="mb-3 row-6 ms-2">
                                <label for="staticEmail" class="col-sm-3 col-form-label">User Name</label>
                            <div class="col-sm-10">
                                <input type="text" readonly class="form-control" id="staticEmail" value=""/>
                            </div>
                        </div>
                        <div class="mb-3 row-6 ms-2">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword"/>
                            </div>
                        </div>
                        <div class="mb-3 row-2">
                            <Link className='btn btn-danger ms-2'>Create User</Link>
                        </div>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Home
