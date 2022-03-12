import { useEffect, useState } from "react"



export const Timer = ({ initial, end }) => {
    const [time, setTime] = useState(initial)


    useEffect(() => {

        const id = setInterval(() => {
            setTime((prev) => {
                if (prev == end) {
                    clearInterval(id)
                    return end
                }
                return prev + 1
            })
            console.log(id)

        }, 200)


        return () => {
            clearInterval(id)
        }

    }, [])



    return <div className="App" >
        <h1>Time:{time}</h1>
    </div>
}