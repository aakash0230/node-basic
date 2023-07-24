const connection = require("../connection/connection")

class employeeController {
    fetchEmployees(req, res){
        connection.promise().query('SELECT * FROM employee')
        .then((value) => {
            const data = value[0];
            res.status(200).json({
                data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    fetchEmployees(req, res){
        connection.promise().query('SELECT * FROM employee')
        .then((value) => {
            const data = value[0];
            res.status(200).json({
                data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addNewEmployees(req, res){
        var data = req.body
        var empData = [data.first_name, data.last_name, data.task, data.priority, data.city]
        connection.promise().query('INSERT INTO employee (first_name, last_name, task, priority, city) values(?)', [empData])
        .then(value => {
            console.log(value)
            res.status(200).json({
                value
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(200).json({
                Status : "Failure",
                err
            })
        })
    }

    updateEmployees(req, res){
        const {first_name, last_name, task, priority, city} = req.body;
        const id = req.params.id
        connection.promise().query('UPDATE employee SET first_name = ?, last_name = ?, task = ?, priority = ?, city = ? , where id = ?', [first_name, last_name, task, priority, city, id])
        .then((value) => {
            res.status(201).json({
                value
            })
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = new employeeController();