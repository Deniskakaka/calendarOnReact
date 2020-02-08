const baseUrl = 'https://5e3194feb92d240014ea4d2b.mockapi.io/api/v1/tasks';

export const createTask = taskData => {
  return  fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    });   
};

export const fetchTasksList = () => {
    return fetch(baseUrl).then(res => {
             if (res.ok) {
                 return res.json()
             }
         })
};

export const deleteTask = (taskId) => {
    return  fetch(`${baseUrl}/${taskId}`, {
                method: 'DELETE'
            }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete task')
            }
    });   
}
