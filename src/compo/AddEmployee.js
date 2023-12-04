import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



const AddEmployee = () => {

    // HOOKS ----------

    const nav = useNavigate(); // --> navaigate back to the employee list after submitting data. 

    const [employee, setEmployee] = useState({ // default state is basically an empty user. 
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    });


    // METHODS ----------

    const handleChange = (event) => {
        const value = event.target.value;
        setEmployee({ ...employee, [event.target.name]: value });
    }

    const saveEmployee = (event) => {
        event.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((res) => {
                console.log(res);
                nav("/employeeList");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const resetEmployee = (event) => {
        event.preventDefault(); // we dont want to reset the page or "reload" the page. 
        setEmployee({ // bring it back to its original state
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">


                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>


                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal"> First Name </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={employee.firstName} 
                        onChange={(event) => handleChange(event)}
                        className="h-10 w-96 border mt-2 px-2 py-2"> 
                    </input>
                </div>


                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal"> Last Name </label>
                    <input 
                        type="text"
                        name="lastName"
                        value={employee.lastName} 
                        onChange={(event) => handleChange(event)}
                        className="h-10 w-96 border mt-2 px-2 py-2"> 
                    </input>
                </div>


                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal"> Email </label>
                    <input 
                        type="text"
                        name="email"
                        value={employee.email}
                        onChange={(event) => handleChange(event)}
                        className="h-10 w-96 border mt-2 px-2 py-2"> 
                    </input>
                </div>


                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button 
                        onClick={saveEmployee}
                        className="rounded text-white font-semibold bg-green-500 px-6 py-2 hover:bg-green-600"> 
                            Save
                    </button>

                    <button
                        onClick={resetEmployee} 
                        className="rounded text-white font-semibold bg-red-500 px-6 py-2 hover:bg-red-600">
                            Clear
                    </button>
                </div>


            </div>
        </div>
    )
}

export default AddEmployee;