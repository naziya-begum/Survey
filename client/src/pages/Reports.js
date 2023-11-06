import { useAppContext } from "../context/appContext"
import React, { useEffect } from 'react'
const Reports = () => {
    const { Reports, Report } = useAppContext()


    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            setTimeout(() => {
                Report()
            }, 5000);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            Report()
        };
    }, []);

    const data = [
        "NEELIMA PALLE",
        "PARASA JHANSI RANI",
        "DOPPALA KIRAN KUMAR",
        "KAMPA BHAVANI",
        "RAMESH GODAVARTHI",
        "JYOTHSNA LATHA BETHAPUDI",
        "SWARANA LATHA",
        "SURESH KUMAR PILLI",
        "Veeramalla Sri Latha",
        "Pajjuru Vijaya Lakshmi",
        "Manem Rani",
        "MANDALA MAHESWARI",
        "Nimmala Venkateswaramma",
        "Ch.Ravindhra Reddy",
        "Swathi Perumalla",
        "koteswara Rao Mendem",
        "Palle Baby Shamili",
        "Vaka Rajya Lakshmi",
        "Sali Sravani",
        "Nimmala Kalyani",
        "Sravani Bolla",
        "Neelam Venkata Sailaja",
        "Matta Jhansi",
        "SEETHA PATHAKOTA",
        "KAKANI SRAVANI KUMARI",
        "KISHORE PAJJURU",
        "VANAJA INDUPALLI",
        "SRI LATHA BADUGU",
        "USHA RANI UADLAMUDI",
        "PATAPANCHULA NAGARAJU",
        "SIVA NAGA MALLESWARI BALLA",
        "MANDALA SEKHARA BABU",
        "NAGARANI UNDRAKONDA",
        "GURIJALA ANJALI",
        "SHAI KALEESHA",
        "CHITYALA SOWJANYA",
        "ANILA VEMULAKONDA",
        "VEMULAKONDA VIJAYALAKSHMI",
        "SURESH BADHINENI",
        "SAMBASIVARAO NAKKANABOINA",
        "NAKKANABOINA ANJALI",
        "SUMAN BALLA",
        "KALYANI BUDDARAPU"
    ]
    const Total = [61, 59, 74, 63, 71, 70, 64, 59, 69, 65, 55, 50, 69, 53, 66, 70, 54, 67, 46, 62, 60, 60, 52, 56, 60, 54, 64, 59, 62, 64, 61, 60, 66, 69, 65, 60, 49, 58, 59, 51, 51, 48, 61];
    function sumArray(arr) {
        return arr.reduce((total, current) => total + current, 0);
    }

    const total = sumArray(Total);

    const array = []
    const toBeUpdateArray = []
    data.map((names, index) => {



        // console.log(update)
        if (Reports[names] === undefined) {
            const update = Total[index] + 0
            const toUpdateArray = 0
            array.push(update)
            return toBeUpdateArray.push(toUpdateArray)

        } else {
            const update = Total[index] - Reports[names]
            const toUpdateArray = Reports[names]
            array.push(update)
            return toBeUpdateArray.push(toUpdateArray)
        }



    })
    const arrayUpdate = sumArray(array)
    const arrayToBeUpdate = sumArray(toBeUpdateArray)
    console.log(arrayToBeUpdate)

    return (
        <div className="Reports" >
            <h2>
                Report
            </h2>

            <table className="table table-dark">
                <thead >
                    <tr>
                        <th scope="col">Volunteer</th>
                        <th scope="col">Total</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Pending</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((names, index) => {
                        return <tr key={index}>
                            <th scope="row" >{names}</th>

                            <td>{Total[index]}</td>

                            {Reports[names] === undefined ? <td>{Total[index] + 0}</td> : <td>{Total[index] - Reports[names]}</td>}

                            <td>{Reports[names] === undefined ? <td>0</td> : Reports[names]}</td>

                        </tr>

                    })}

                    <tr><td>Total</td>

                        <td>{total}</td>
                        <td>{arrayUpdate}</td>
                        <td>{arrayToBeUpdate}</td>
                    </tr>






                </tbody>
            </table>

        </div>
    )
}
export default Reports

// [0]   'NEELIMA PALLE': 61,
// [0]   'PARASA JHANSI RANI': 59,
// [0]   'DOPPALA KIRAN KUMAR': 74,
// [0]   '#N/A': 1,
// [0]   'KAMPA BHAVANI': 63,
// [0]   'RAMESH GODAVARTHI': 71,
// [0]   'JYOTHSNA LATHA BETHAPUDI': 70,
// [0]   'SWARANA LATHA': 64,
// [0]   'SURESH KUMAR PILLI': 59,
// [0]   'Veeramalla Sri Latha': 69,
// [0]   'Pajjuru Vijaya Lakshmi': 65,
// [0]   'Manem Rani': 55,
// [0]   'MANDALA MAHESWARI': 50,
// [0]   'Nimmala Venkateswaramma': 69,
// [0]   'Ch.Ravindhra Reddy': 53,
// [0]   'Swathi Perumalla': 66,
// [0]   'koteswara Rao Mendem': 70,
// [0]   'Palle Baby Shamili': 54,
// [0]   'Vaka Rajya Lakshmi': 67,
// [0]   'Sali Sravani': 46,
// [0]   'Nimmala Kalyani': 62,
// [0]   'Sravani Bolla': 60,
// [0]   'Neelam Venkata Sailaja': 60,
// [0]   'Matta Jhansi': 52,
// [0]   'SEETHA PATHAKOTA': 56,
// [0]   'KAKANI SRAVANI KUMARI': 60,
// [0]   'KISHORE PAJJURU': 54,
// [0]   'VANAJA INDUPALLI': 64,
// [0]   'SRI LATHA BADUGU': 59,
// [0]   'USHA RANI UADLAMUDI': 62,
// [0]   'PATAPANCHULA NAGARAJU': 64,
// [0]   'SIVA NAGA MALLESWARI BALLA': 61,
// [0]   'MANDALA SEKHARA BABU': 60,
// [0]   'NAGARANI UNDRAKONDA': 66,
// [0]   'GURIJALA ANJALI': 69,
// [0]   'SHAI KALEESHA': 65,
// [0]   'CHITYALA SOWJANYA': 60,
// [0]   'ANILA VEMULAKONDA': 49,
// [0]   'VEMULAKONDA VIJAYALAKSHMI': 58,
// [0]   'SURESH BADHINENI': 59,
// [0]   'SAMBASIVARAO NAKKANABOINA': 51,
// [0]   'NAKKANABOINA ANJALI': 51,
// [0]   'SUMAN BALLA': 48,
// [0]   'KALYANI BUDDARAPU': 61