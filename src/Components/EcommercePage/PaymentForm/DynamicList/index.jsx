import React, { useState } from 'react';
import ListItem from './ListItem';
import NewTaskInput from './NewTaskInput';
import { ChakraProvider, Accordion } from "@chakra-ui/react";

const App = () => {
    const [tasks, setTasks] = useState([]);

    function addNewTask(task) {
        const itensCopy = Array.from(tasks);
        itensCopy.push({ id: tasks.length, fullName: task.fullName, birthDate: task.birthDate });
        setTasks(itensCopy);
    }

    function updateTask({ target }, index, option) {
        const itensCopy = Array.from(tasks);

        if (option === "fullName") {
            itensCopy[index].fullName = target.value;
        } else if (option === "birthDate") {
            itensCopy[index].birthDate = target.value;
        }

        setTasks(itensCopy);
    }

    function deleteTask(index) {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1);
        setTasks(itensCopy);
    }

    return (
        <div className="App">
            <ChakraProvider>
                <NewTaskInput onSubmit={addNewTask} />

                <Accordion defaultIndex={[0]} allowMultiple mt="4">
                    {tasks.map(({ id, fullName, birthDate }, index) => (
                        <ListItem
                            key={id}
                            value={{ "id": id, "fullName": fullName, "birthDate": birthDate }}
                            onFullNameChange={(event) => updateTask(event, index, "fullName")}
                            onBirthDateChange={(event) => updateTask(event, index, "birthDate")}
                            onDelete={() => deleteTask(index)}
                        />
                    ))}
                </Accordion>
            </ChakraProvider>
            {/* 
            <div className="Array-preview">
                <pre>
                    {JSON.stringify(tasks, null, 4)}
                </pre>
            </div> */}
        </div>
    )
}

export default App;