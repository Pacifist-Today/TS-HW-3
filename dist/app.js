var outputData = {
    "sum": 20000,
    "from": 2,
    "to": 4
};
var getRequest = function (inputObj) {
    var status = inputObj.status, data = inputObj.data;
    return {
        status: status,
        data: data
    };
};
console.log(getRequest({
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
}));
console.log(getRequest({
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
}));
