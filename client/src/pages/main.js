import '../assets/main.css'
import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';

const Main = () => {
    const [name, setName] = useState('')
    const set = {
        Secrateriat: '',
        Volunteer: '',
        headName: '',
        Adhar: '',
        checkbox: '',

    }



    const [values, setValues] = useState(set)
    const {
        VillageCheck,
        volunteerData,
        villageSelect,
        volunteerCheck,
        householdData,
        volunteerSelect,
        headSelect,
        HouseHoldCheck,
        houseHoldHeadName,
        showAlert, displayAlert, userSend, alertType, alertText, Reports, village, Volunteer, Report, Result
    } = useAppContext();

    if (volunteerSelect === null) {
        window.location.reload()
    }

    const handleChange = (e) => {
        e.preventDefault()
        // setvillage(e.target.value)
        console.log(e.target.value)
        VillageCheck(e.target.value)
        Report()



    }
    const handleChangeVolunteer = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        volunteerCheck(e.target.value)
    }
    const handleChangeHeadName = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
        HouseHoldCheck(e.target.value)

    }
    const inputChnage = (e) => {

        // console.log(e.target.name + ':' + e.target.value)
        setValues({ ...values, Secrateriat: village, Volunteer: Volunteer, headName: name, [e.target.name]: e.target.value })


        e.preventDefault()
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.Adhar.length > 12 || values.Adhar.length < 12 || values.checkbox === '') {

            displayAlert()

        } else {
            userSend(values)
            alert('Successfully Submitted')

            console.log('success')
            window.location.reload()

        }
    }




    return (
        <div className='main'>
            {Reports !== null ? <Link to='/Reports' className="btn">Reports</Link> : null}

            <br />

            <div>  <h5 className='heading5'>Secrateriat:</h5>
                <select className="inputfeild" required onChange={handleChange}  >

                    <option hidden>Select...</option>
                    <option value='G.konduru-1'>KONDURU1</option>
                    <option value='G.konduru-2'>KONDURU2</option>

                </select>
            </div>
            <br />
            {villageSelect ? <div> <h5 className='heading5'>Volunteer:</h5>

                <select className="inputfeild" required onChange={handleChangeVolunteer}>

                    <option hidden>Select...</option>
                    {volunteerData.map((data, index) => {
                        return <option key={index}>{data}</option>
                    })}
                </select> </div> : false}
            <br />
            {volunteerSelect ? <div> <h5 className='heading5'>HouseHoldHead:</h5>
                <select required className="inputfeild" onChange={handleChangeHeadName}>
                    <option hidden>Select...</option>
                    {householdData.map((headData, index) => {
                        return <option key={index}>{headData}</option>
                    })}
                </select> </div> : false}
            <br />
            {headSelect ? <div>
                <form className='form' onSubmit={handleSubmit}>
                    {showAlert ? <div className={`alert alert-${alertType}`}>{alertText}</div> : false}
                    <h5 className='heading5' id='input'>AdharNo.of {houseHoldHeadName}:</h5>
                    <input className="inputfeild" name='Adhar' onChange={inputChnage} type='number' placeholder='*****' />
                    <h5 className='heading5' id='input'>Is House of {houseHoldHeadName} has tap connection??</h5>
                    <select className="inputfeild" name='checkbox' onChange={inputChnage}>
                        <option hidden>Select...</option>
                        <option value='YES'>YES</option>
                        <option value='NO'>NO</option>
                    </select>
                    <br />
                    <button className='button' type='submit'>Submit</button>

                </form>
            </div> : false}



        </div>







    )
}
export default Main