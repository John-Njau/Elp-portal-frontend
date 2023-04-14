import React,{useState} from 'react'
import MainLayoutAuth from '../../layouts/MainLayoutAuth'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { 
  PersonalDataForm,
  EducationDataForm,
  EmploymentDataForm,
  CertificationDataForm,
  ReferencesDataForm,
  FilesDataForm,
 } from './profileSection'

const UpdateProfile = () => {
  const axiosInstance =  useAxiosPrivate()
  const [currentPart, setCurrentPart] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentPart(currentPart + 1);
  };

  const handlePrev = () => {
    setCurrentPart(currentPart - 1);
  };

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    console.log('Form submitted:', formData);
  };



  const handleSubmit1 = async (event) => {
  let  studentDetails = {
      "faname":"kamua",
      "phone":"3883783737"
    }
    //check if all fields have values
    let payload = {
      firstName:studentDetails.faname,
      firstName:studentDetails.faname,
      firstName:studentDetails.faname,
    }
    const updatestudentresponse = await axiosInstance.post("/api/v1/kjfjfjrnr",payload)
    console.log(updatestudentresponse)
    const {data,status} = updatestudentresponse
   
   }
  return (
    <>
      <div class="main-content-container container-fluid px-4">
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Overview</span>
                <h3 class="page-title">User Profile</h3>
              </div>
            </div>
            <div className="row">
            <div class="col-lg-1"></div>
             <div class="col-lg-10">
                <div class="card card-small mb-4">
                {currentPart === 1 && <PersonalDataForm onNext={handleNext} />}
                {currentPart === 2 && <EducationDataForm data={formData} onPrev={handlePrev} onNext={handleNext} />}
                {currentPart === 3 && <EmploymentDataForm data={formData} onPrev={handlePrev} onNext={handleNext} />}
                {currentPart === 4 && <CertificationDataForm data={formData} onPrev={handlePrev} onNext={handleNext} />}
                {currentPart === 5 && <ReferencesDataForm data={formData} onPrev={handlePrev} onNext={handleNext} />}
                {currentPart === 6 && <FilesDataForm data={formData} onPrev={handlePrev} onNext={handleSubmit} />}
                </div>

                
              </div>
              <div class="col-lg-1"></div>
              </div>
              </div>
    </>
  )
}

export default MainLayoutAuth(UpdateProfile)