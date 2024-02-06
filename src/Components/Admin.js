import React,{ useEffect, useState } from "react";


function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:5000/api/mongodb");
            const resData= await reqData.json();
            setUserdata(resData);
           // console.log(resData);
        }
        getUserdata();
    },[]);
 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Data</h5>
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Branch</th>
                        <th>Dance</th>
                        <th>Cultural</th>
                        <th>Skits</th>
                        <th>Photography</th>
                        </tr>
                        </thead>
                        <tbody>
                         { userData.map( (userData, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ userData.name } </td>
                        <td>{ userData.course } </td>
                        <td>{ userData.branch } </td>
                        <td>{ userData.dance===true?"yes":"no"  } </td>
                        <td>{ userData.cultural===true?"yes":"no" } </td>
                        <td>{ userData.skits===true?"yes":"no" } </td>
                        <td>{ userData.photography===true?"yes":"no" } </td>
                        
                        </tr>
                        )) 
                        }                        
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;