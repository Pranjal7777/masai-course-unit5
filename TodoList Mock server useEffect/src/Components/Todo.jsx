import { useState, useEffect } from "react"

import axios from "axios"

export const Todo = () => {
    const [task, setTask] = useState("")
    const [aTask, asetTask] = useState([])
    const [page, setPage] = useState(1)
    console.log(page)

    useEffect(() => {
        getData()
    }, [page])

    const getData = () => {
        axios.get(`http://localhost:3001/todo_list?_limit=4&_page=${page}`).then(res => {
            asetTask(res.data)
        })
    }

    return <div>
        <h1>Todo List Application</h1>

        <input type="text" onChange={(e) => {
            setTask(e.target.value)
        }} />

        <button onClick={() => {

            fetch("http://localhost:3001/todo_list", {
                method: 'POST',
                body: JSON.stringify({ task }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => {
                getData()
            })

        }}>Save</button>

        {aTask.map((elem) =>
            <div key={elem.id}>
                {elem.task}
            </div>
        )
        }

        <button onClick={() => { setPage(page - 1) }}>Prev</button> <button onClick={() => {
            if (page) {
                setPage(page + 1)
            }
        }}>Next</button>


    </div>

}