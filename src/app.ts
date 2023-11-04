const outputData = {
    "sum": 20000,
    "from": 2,
    "to": 4
}

// enum Status {
//     "success",
//     "failed"
// }

interface ISuccess {
    // "status": Status.success,
    "status": "success",
    "data": {
        readonly "databaseId": number,
        "sum": number,
        "from": number,
        "to": number
    }
}

interface IFailed {
    // "status": Status.failed,
    "status": "failed",
    "data": {
        readonly "errorMessage": string,
        readonly "errorCode": number
    }
}

const getRequest = (inputObj: ISuccess | IFailed): {} => {
    const {status, data} = inputObj
    return {
        status,
        data
    }
}

console.log(
    getRequest({
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
})
)

console.log(
    getRequest({
        "status": "failed",
        "data": {
            "errorMessage": "Недостаточно средств",
            "errorCode": 4
        }
    })
)

