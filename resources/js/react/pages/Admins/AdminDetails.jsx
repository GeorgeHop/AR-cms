import React from "react";
import PageHeader from "../../components/MainLayout/PageHeader";

const AdminDetails = () => {
    return (
        <>
            <PageHeader title={'Create New Admin'}/>
            <div className='col-md-5'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='adminName'>Admin name</label>
                        <input type='text' className='form-control' id='adminName' placeholder='AdminName'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="admin-role">Admin role</label>
                        <select className="form-control" id="admin-role">
                            <option>Admin</option>
                            <option>Scenarist</option>
                            <option>Support</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='adminPassword'>Password</label>
                        <input type='password' className='form-control' id='adminPassword'/>
                    </div>
                    <div className='form-group'>
                        <button type="button" className="btn btn-outline-primary">Create new Admin</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminDetails;
