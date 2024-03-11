import { adminlinks } from '../assets/constants/Side_Constants';
import SideBar from '../components/Side_Bar';
import { useState } from 'react';
import { Spinner ,Text} from '@chakra-ui/react'
// import Enquiry from '../assets/images/enquiry.png'
import axios from 'axios';
function Add_Courses_Admin() {
    const [loading, setLoading] = useState(false);
     const [coursename,setCourseName]=useState('');
     const [description,setDescription]=useState('');
     const [duration,setDuration]=useState('');
     const[fees,setFees]=useState('');
     const[level,setLevel]=useState('');
     const[imageurl,setImageUrl]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(fees)
    setLoading(true);
    const token=localStorage.getItem('jwtToken');
    setTimeout(() => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
      setLoading(false);
      axios
      .post('http://localhost:8989/admin/postCourses', {
        course_name: coursename,
        description: description,
        duration: duration,
        fees: fees,
        level: level,
        imageUrl:imageurl
      })
      .then((response) => {
        // const token = response.data.token;
        // const id = response.data.id;
        // console.log(email)
        // console.log(token);
        // localStorage.setItem('jwtToken', token);
        // localStorage.setItem('id', id);
        // navigate('/user/dashboard');
      //   toast({
      //     position: 'top-right',
      //     title: 'Login Successfully',
      //     description: 'You have successfully logged in.',
      //     status: 'success',
      //     duration: 5000,
      //     variant:'top-accent',
      //     isClosable: true,
      // });
      })
      .catch((error) => {
        // setErrorMessage("Enter Valid Credentials");
        console.log(error);
      });

    }, 2000);
  };
    return ( 
       <div className='flex'>
    <SideBar links={{ studentlinks: adminlinks, currentlinks: 'Add Courses',role:'admin' }} />
    <section className="bg-gray-50 dark:bg-gray-700 w-full ">
      <div className="flex flex-row px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=' bg-gray-800' style={{width:"40%", borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-2">
           Create Course...
        </h1>
         <div className='flex justify-center'><img src='data:image/jpeg;base64,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' width='100%' ></img></div> 
          <Text className='p-4 text-white leading-relaxed'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We appreciate your interest in our courses and welcome your inquiries about the subjects we offer. To ensure a smooth and efficient process, we kindly request that you adhere to the following rules when submitting an enquiry. First, please provide accurate and detailed information regarding the specific subjects or courses you are interested in. </Text>
          </div>
        <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{borderTopRightRadius:10,borderBottomRightRadius:10}}>
      
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

            <form className="space-y-4 md:space-y-6 display-flex" action="#">
              <div>
                <div className='flex justify-between'>
                  <div>
                <label for="coursename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                  <input type="text" name="course name" id="course" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="c++" required="" onChange={(e)=>{setCourseName(e.target.value)}}></input>
                  </div>
                  <div>
              <label for="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                  {/* <input type="text" name="course name" id="course" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Easy" required="" onChange={(e)=>{setCourseName(e.target.value)}}></input>
                   */}
                   <select className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={level} onChange={(e)=>{setLevel(e.target.value)}}>
                    <option>
                      Basic
                    </option >
                    <option>
                      Intermediate
                    </option>
                    <option>
                      Advanced
                    </option>
                   </select>
                  </div>
                </div>
               </div>
              {/* <div className='flex flex space-x-3'> */}
              <div>
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea type="text" name="description" id="password" placeholder="Write text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
              </div>
                <div>
                  <label for="duration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                  <input type="text" name="duration" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 weeks" required="" onChange={(e)=>{setDuration(e.target.value)}}></input>
                </div>
                <div>
                  <label for="feesamount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fees Amount</label>
                  <input type="number" name="number" id="feesamaount" placeholder="1000" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""onChange={(e)=>{setFees(e.target.value)}}></input>
                </div>
                <div>
                  <label for="imageurl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                  <input type="text" name="url" id="url" placeholder="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{setImageUrl(e.target.value)}}></input>
                </div>
              {/* </div> */}
            
              <button
                type="submit"
                className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Spinner color='teal.200' /> : 'create course'}
              </button>


            </form>
          </div>
        </div>
      </div>
    </section>
    </div> );
}

export default Add_Courses_Admin;