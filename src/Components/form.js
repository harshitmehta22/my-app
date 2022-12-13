import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'
function Newap(){
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            number:"",
            file: ""    
        },
        validationSchema:Yup.object({
            name:Yup.string()
                .max(10,"Username must be atleast 10 letters")
                .required("this is required field"),
            email:Yup.string()
                .email("please provide valid email"),
            number:Yup.number()
                .required("this is required field")
                .max(10,"Enter Atleast 10 number"),
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })
    console.log(formik.touched)
    return(
        <div className="newappl">
            <form>
                <fieldset>
                <label>Name</label>
                <input
                   type="text"
                   name="name"
                   className="cmn-inpt"
                   placeholder=""
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
                />
                {formik.errors.name && <p style={{color: "red"}}>{formik.errors.name}</p>}
                </fieldset>
                <fieldset>
                <label>Email</label>
                <input
                   type="email"
                   name="email"
                   className="cmn-inpt"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.email}
                />
                {formik.errors.email && <p style={{color: "red"}}>{formik.errors.email}</p>}
                </fieldset>
                <fieldset>
                    <label>Phone</label>
                <input
                type="text"
                name="number"
                className="cmn-inpt"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                />
                {formik.errors.number && <p style={{color: "red"}}>{formik.errors.number}</p>}
                </fieldset>
                <fieldset className="field-block-file">
                <input
                className="attribute_input"
                name="file"
                type="file"
                id="input-file"
                />
                </fieldset>
                <input type="submit" value="submit" class="form-submit"></input>
            </form>
        </div>
    )
}
export default Newap;