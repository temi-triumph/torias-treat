
const yup = require("yup");

const validateSiginForm = (req, res) => {

    /// Formik schema validation
    const formSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(7).required(),
    })

    formSchema.validate(req.body).catch(err => {
        console.log(err.errors);
       res.status(422)

      return;
      
    }).then(valid => {
        console.log("form is good");
    })


    // console.log(req.body);

    // if (!email || !password) {
    //     res.status(400);
    //     throw new Error("please add all fields");
    // }
  
}



module.exports = validateSiginForm;


