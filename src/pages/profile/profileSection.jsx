export const PersonalDataForm = ({ onNext }) =>{
    const handleSubmit = async (event) => {
        event.preventDefault();
        //onSubmit({ ...data  });
         //onNext({ ...data,  });
         onNext();
      };
    return(
        <>
          <div class="card-header border-bottom">
                    <h6 class="m-0">Personal Data</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">First Name</label>
                                <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"/> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">Last Name</label>
                                <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                              <div class="form-group col-md-6">
                                <label for="fePassword">Password</label>
                                <input type="password" class="form-control" id="fePassword" placeholder="Password"/> </div>
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"/> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Description</label>
                                <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                              </div>
                            </div>
                            <div class="form-row">
                              <div className="form-group col-2">
                              </div>
                              <div className="form-group col-8 col-md-6 col-sm-6"></div>
                              <div className="form-group col-2">
                              <button type="submit" class="btn btn-accent">Save and Continue</button>
                              </div>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
        </>

    )
}

export const EducationDataForm = ({ data, onPrev, onNext }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit({ ...data });
        onNext({ ...data, });
      };
    return(
        <>
          <div class="card-header border-bottom">
                    <h6 class="m-0">Education </h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">University</label>
                                <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"/> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">School</label>
                                <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Study</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                              
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div>
                            {/* <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"/> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/> </div>
                            </div> */}
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Describe Your Education Journy</label>
                                <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum </textarea>
                              </div>
                            </div>
                            <div class="form-row">                           
                              <div className="form-group col-2">
                              <button onClick={onPrev} class="btn btn-accent">Previous</button>
                              </div>
                              <div className="form-group col-8 col-md-6 col-sm-6"></div>
                              <div className="form-group col-2">
                              <button type="submit" class="btn btn-accent">Save and Continue</button>
                              </div>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
        </>
        )
}

export const EmploymentDataForm = ({ data, onPrev, onNext }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit({ ...data  });
        onNext({ ...data });

      };
    return(
        <>
        <div class="card-header border-bottom">
                  <h6 class="m-0">Employment info</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item p-3">
                    <div class="row">
                      <div class="col">
                      <form onSubmit={handleSubmit}>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="feFirstName">Job Title</label>
                              <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"/> </div>
                            {/* <div class="form-group col-md-6">
                              <label for="feLastName">Last Name</label>
                              <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"/> </div> */}
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="feEmailAddress">Employer Name</label>
                              <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                            {/* <div class="form-group col-md-6">
                              <label for="fePassword">Password</label>
                              <input type="password" class="form-control" id="fePassword" placeholder="Password"/> </div> */}
                          </div>
                          {/* <div class="form-group">
                            <label for="feInputAddress">Address</label>
                            <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div> */}
                          {/* <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="feInputCity">City</label>
                              <input type="text" class="form-control" id="feInputCity"/> </div>
                            <div class="form-group col-md-4">
                              <label for="feInputState">State</label>
                              <select id="feInputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div class="form-group col-md-2">
                              <label for="inputZip">Zip</label>
                              <input type="text" class="form-control" id="inputZip"/> </div>
                          </div> */}
                          <div class="form-row">
                            <div class="form-group col-md-12">
                              <label for="feDescription">Achievements</label>
                              <textarea class="form-control" name="feDescription" rows="5"> </textarea>
                            </div>
                          </div>
                          <div class="form-row">
                            <div className="form-group col-2">
                            <button onClick={onPrev} class="btn btn-accent">Previous</button>
                            </div>
                            <div className="form-group col-8 col-md-6 col-sm-6"></div>
                            <div className="form-group col-2">
                            <button type="submit" class="btn btn-accent">Save and Continue</button>
                            </div>
                          </div>
                          
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
      </>
        )
}

export const CertificationDataForm = ({ data, onPrev, onNext }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit({ ...data  });
        onNext({ ...data });

      };
    return(
        <>
          <div class="card-header border-bottom">
                    <h6 class="m-0">Certifications Data</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">Certification 1</label>
                                <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"/> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">Certification 2</label>
                                <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"/> </div>
                            </div>
                            {/* <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                              <div class="form-group col-md-6">
                                <label for="fePassword">Password</label>
                                <input type="password" class="form-control" id="fePassword" placeholder="Password"/> </div>
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"/> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/> </div>
                            </div> */}
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Achievement</label>
                                <textarea class="form-control" name="feDescription" rows="5"></textarea>
                              </div>
                            </div>
                            <div class="form-row">
                              <div className="form-group col-2">
                              <button onClick={onPrev} class="btn btn-accent">Previous</button>
                              </div>
                              <div className="form-group col-8 col-md-6 col-sm-6"></div>
                              <div className="form-group col-2">
                              <button type="submit" class="btn btn-accent">Save and Continue</button>
                              </div>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
        </>
        )
}

export const ReferencesDataForm = ({ data, onPrev, onNext }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit({ ...data  });
        onNext({ ...data });

      };
    return(

        <>
          <div class="card-header border-bottom">
                    <h6 class="m-0">References Data</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">First Name</label>
                                <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"/> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">Last Name</label>
                                <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                              <div class="form-group col-md-6">
                                <label for="fePassword">Phone Number</label>
                                <input type="password" class="form-control" id="fePassword" placeholder="Password"/> </div>
                            </div>
                            {/* <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"/> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Description</label>
                                <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                              </div>
                            </div> */}
                            <div class="form-row">
                              <div className="form-group col-2">
                              <button onClick={onPrev} class="btn btn-accent">Previous</button>
                              </div>
                              <div className="form-group col-8 col-md-6 col-sm-6"></div>
                              <div className="form-group col-2">
                              <button type="submit" class="btn btn-accent">Save and Continue</button>
                              </div>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
        </>
        )
}

export const FilesDataForm = ({ data, onPrev, onNext }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit({ ...data  });
        onNext({ ...data});

      };
    return(
        <>
          <div class="card-header border-bottom">
                    <h6 class="m-0">My Files</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">Resume Upload </label>
                                <input type="file" class="form-control" id="feFirstName" placeholder="Resume" /> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">Cover Letter</label>
                                <input type="file" class="form-control" id="feLastName" placeholder="Cover Letter" /> </div>
                            </div>
                            {/* <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"/> </div>
                              <div class="form-group col-md-6">
                                <label for="fePassword">Password</label>
                                <input type="password" class="form-control" id="fePassword" placeholder="Password"/> </div>
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"/> </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"/> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Description</label>
                                <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                              </div>
                            </div> */}
                            <div class="form-row">
                              <div className="form-group col-2">
                              <button onClick={onPrev} class="btn btn-accent">Previous</button>
                              </div>
                              <div className="form-group col-8 col-md-6 col-sm-6"></div>
                              <div className="form-group col-2">
                              <button type="submit" class="btn btn-accent">Save and Continue</button>
                              </div>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
        </>
        )
}