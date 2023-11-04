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
        Assessment_Number: '',
        Assessment_Name: '',
        HouseType: ''


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
        showAlert, housetypeselect, housetype, houseType, displayAlert, userSend, alertType, alertText, Reports, village, Volunteer, Report, Result
    } = useAppContext();




    if (villageSelect === null) {
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


        setValues({ ...values, Secrateriat: village, Volunteer: Volunteer, headName: name, [e.target.name]: e.target.value })
        houseType(e.target.value)

        e.preventDefault()
    }
    const handleSubmit = (e) => {
        e.preventDefault()


        Report()
        userSend(values)
        console.log('success')
        alert('Successfully Submitted')
        setTimeout(() => {
            window.location.reload()
        }, 3000);

        // }

    }




    return (
        <div className='main'>
            {<Link to='/Reports' className="btn">Reports</Link>}

            <br />

            <div>  <h5 className='heading5'>Secrateriat:</h5>
                <select className="inputfeild" required onChange={handleChange}>
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
                    {/* <h5 className='heading5' id='input'>Adhar Number of {houseHoldHeadName}:</h5>
                    <input className="inputfeild" name='Adhar' onChange={inputChnage} type='number' placeholder='*****' /> */}

                    <h5 className='heading5 bolder' id='input'> నివసిస్తున్న ఇల్లు </h5>
                    <select className="inputfeild" name='HouseType' onChange={inputChnage}>
                        <option hidden>Select...</option>
                        <option value='Rent House'>Rent House</option>
                        <option value='Own House'>Own House</option>
                    </select>

                    {housetypeselect ? <div>
                        {housetype === 'Rent House' ? <div>
                            <br />
                            <br />
                            <h5 className='heading5 bold' id='input'>నివసిస్తున్న అద్దె ఇంటి పన్ను ప్రకారం అసెస్మెంట్ నంబర్:</h5>
                            <input className="inputfeild" name='Assessment_Number' onChange={inputChnage} type='number' placeholder='*****' />

                            <h5 className='heading5 bold' id='input'>ఇంటి పన్ను ప్రకారం ఇంటి యజమాని పేరు:</h5>
                            <input className="inputfeild" name='Assessment_Name' onChange={inputChnage} type='text' placeholder='*****' />
                        </div>
                            :
                            <div>

                                <h5 className='heading5 bolder' id='input'>నివసిస్తున్న స్వంత ఇంటి పన్ను ప్రకారం అసెస్మెంట్ నంబర్:</h5>
                                <input className="inputfeild" name='Assessment_Number' onChange={inputChnage} type='number' placeholder='*****' />

                                <h5 className='heading5 bold' id='input'>ఇంటి పన్ను ప్రకారం ఇంటి యజమాని పేరు:</h5>
                                <input className="inputfeild" name='Assessment_Name' onChange={inputChnage} type='text' placeholder='*****' />
                            </div>}
                    </div> : false}
                    <br />
                    <button className='button' type='submit'>Submit</button>
                    {/* <h5 className='heading5 bolder' id='input'>Is House of {houseHoldHeadName} has Tap connection(Provided by panchayat)</h5>
                    <select className="inputfeild" name='checkbox' onChange={inputChnage}>
                        <option hidden>Select...</option>
                        <option value='YES'>YES</option>
                        <option value='NO'>NO</option>
                    </select> */}


                </form>
                <p className='desiner'>WEBSITE DESIGNED BY:@naziya</p>
            </div> : false}



        </div>







    )
}
export default Main