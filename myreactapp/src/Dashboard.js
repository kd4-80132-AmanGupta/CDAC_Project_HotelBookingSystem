import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Dashboard() {
    const url = "http://localhost:5020/users/allUsers";
    const[emps,setEmps] = useState([]);
    const [emp,setEmp] = useState({No: "",Name: "",Address:""})

    const FetchRecords = ()=>{
        axios.get(url).then((result)=>{
            console.log(result.data);
            setEmps(result.data)
        })
    }
    const RemoveRecord = (No)=>{
        console.log(No);

        var deleteUrl = url + "/"+No;
        axios.delete(deleteUrl).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                FetchRecords();
            }
        })
    }
    
    const OnTextChanged=(args)=>{
        var copyOfEmp = {...emp};
        copyOfEmp[args.target.name]=args.target.value;
        setEmp(copyOfEmp);
    }
    const AddRecord=()=>{
        axios.post(url,emp).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                FetchRecords();
                Reset();
            }
        })
    }
    const EditRecord=(No)=>{
        for (let i = 0; i<emps.length; i++) {
            if(emps[i].No === No){
                var empToEdit = {...emps[i]};
                setEmp(empToEdit);
                break;
            }
            
        }
    }
    const UpdateRecord=()=>{
        var updateUrl = url +"/"+emp.No;
        axios.put(updateUrl,emp).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                FetchRecords();
                Reset();
            }
        })
    }
    const Reset=()=>{
        setEmp({No: "",Name:"",Address:""});
    }
    useEffect(()=>{
                 FetchRecords()   
                },[])

    return ( <div className='container'>
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td>No</td>
                        <td>
                            <input type='text' name='No'
                            value={emp.No}
                            onChange={OnTextChanged}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type='text' name='Name'
                            value={emp.Name}
                            onChange={OnTextChanged}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input type='text' name='Address'
                            value={emp.Address}
                            onChange={OnTextChanged}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn btn-primary' onClick={AddRecord}>Add Record</button>{" "}
                            <button className='btn btn-success' onClick={UpdateRecord}>Update Record</button>{" "}
                            <button className='btn btn-info' onClick={Reset}>Reset</button>{" "}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr></hr>
        <hr></hr>

        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {  emps.map((emp)=>{
                            return (<tr key={emp.No}>
                                <td>{emp.userId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.Address}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={()=>{
                                        EditRecord(emp.No)
                                    }}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                <button className='btn btn-danger' onClick={()=>{
                                    RemoveRecord(emp.No)
                                }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>

    </div> );
}

export default Dashboard;