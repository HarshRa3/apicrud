import * as Yup from 'yup'
export const signUpSchema=Yup.object({
    name:Yup.string().min(3,"username should be in 3 letter").max(25).required('Please Enter Your Name')
    ,password:Yup.string().min(6,"password must be 6 letter").required('Please Enter Your Password')
})
export const signInScheema=Yup.object({
    name:Yup.string().min(3,'username should be in 3 letter').max(25).required('Please Enter Your Correct Name'),
    password:Yup.string().min(6,"password must be 6 letter").required('Please Enter Your Password')
})