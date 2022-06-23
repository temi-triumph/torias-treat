
const yup = require("yup");

const validateProduct = (req, res, next) => {

    /// Formik schema validation
    const formSchema = yup.object({
        name: yup.string().required(),
        description: yup.string().max(2).required(),
        category: yup.string("Category must be a string").required(),
        price: yup.number("Price must be a number").required("Price can not be empty").typeError("price is required")
    })

    formSchema.validate(req.body).catch(err => {
        console.log(err);
      // res.status(422) /// 422 unprocessable entity  400 bad request
      res.status(422);
      next(err.errors);
      return;
      
    }).then(valid => {
        console.log("product validation success");
        console.log(valid);
    })
}



module.exports = validateProduct;


