// import React, { useState } from 'react';
// import Header from './Header';

// function InputForm() {
//     const [soldier, setSoldier] = useState({});
//     const [operation, setOperation] = useState({});

//     const handleSoldierChange = (e) => {
//         setSoldier({ ...soldier, [e.target.name]: e.target.value });
//     };

//     const handleOperationChange = (e) => {
//         setOperation({ ...operation, [e.target.name]: e.target.value });
//     };

//     const handleAddSoldier = () => {
//         addSoldier(soldier);
//     };

//     const handleAddOperation = () => {
//         addOperation(operation.ID, operation);
//     };

//     return (
//         <div className="soldier">
//             <Header />
//             <h2 className="sol">Add Soldier</h2>
//             <input type="text" name="ID" placeholder="ID" onChange={handleSoldierChange} />
//             <input type="text" name="Name" placeholder="Name" onChange={handleSoldierChange} />
//             <input type="date" name="PersonalInformation.DateOfBirth" placeholder="Date of Birth" onChange={handleSoldierChange} />
//             <input type="text" name="PersonalInformation.BloodGroup" placeholder="Blood Group" onChange={handleSoldierChange} />
//             <input type="text" name="PersonalInformation.PhoneNumber" placeholder="Phone Number" onChange={handleSoldierChange} />
//             <input type="text" name="PersonalInformation.Address" placeholder="Address" onChange={handleSoldierChange} />
//             <input type="text" name="PersonalInformation.IdentityMarks" placeholder="Identity Marks" onChange={handleSoldierChange} />
//             <input type="text" name="Position" placeholder="Position" onChange={handleSoldierChange} />
//             <input type="text" name="Specialization" placeholder="Specialization" onChange={handleSoldierChange} />
//             <button onClick={handleAddSoldier}>Add Soldier</button>

//             <h2>Add Operation</h2>
//             <input type="text" name="ID" placeholder="Soldier ID" onChange={handleOperationChange} />
//             <input type="text" name="OperationName" placeholder="Operation Name" onChange={handleOperationChange} />
//             <input type="text" name="Status" placeholder="Status" onChange={handleOperationChange} />
//             <input type="text" name="Result" placeholder="Result" onChange={handleOperationChange} />
//             <input type="text" name="Note" placeholder="Note" onChange={handleOperationChange} />
//             <button onClick={handleAddOperation}>Add Operation</button>
//         </div>
//     );
// }

// export default InputForm;

// import React, { useState } from 'react';
// import Header from './Header';
// import Web3 from 'web3';

// function InputForm() {
//     const [soldier, setSoldier] = useState({});
//     const [operation, setOperation] = useState({});

//     const web3 = new Web3(Web3.givenProvider);
//     const contractAddress = "0x5cb2d70149ce2182fba55bfe5817378a4f06f922"; // Replace with your deployed contract address
//     const contractABI = [[
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_soldierId",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_operationName",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_status",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_result",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_note",
//                     "type": "string"
//                 }
//             ],
//             "name": "addOperation",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_id",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_dob",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_bloodGroup",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_phoneNumber",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_address",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_identityMarks",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_position",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_specialization",
//                     "type": "string"
//                 }
//             ],
//             "name": "addSoldier",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_id",
//                     "type": "string"
//                 }
//             ],
//             "name": "getSoldier",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string[6]",
//                     "name": "",
//                     "type": "string[6]"
//                 },
//                 {
//                     "internalType": "string[4]",
//                     "name": "",
//                     "type": "string[4]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]]; // Replace with your contract ABI

//     const handleSoldierChange = (e) => {
//         setSoldier({ ...soldier, [e.target.name]: e.target.value });
//     };

//     const handleOperationChange = (e) => {
//         setOperation({ ...operation, [e.target.name]: e.target.value });
//     };

//     const handleAddSoldier = async () => {
//         const accounts = await web3.eth.getAccounts();
//         const contract = new web3.eth.Contract(contractABI, contractAddress);

//         await contract.methods.addSoldier(
//             soldier.Name,
//             Date.parse(soldier.DateOfBirth), // assuming DateOfBirth is a string in ISO format
//             soldier.BloodGroup,
//             soldier.PhoneNumber,
//             soldier.Address,
//             soldier.IdentityMarks,
//             soldier.Position,
//             soldier.Specialization
//         ).send({ from: accounts[0] });
//     };

//     const handleAddOperation = async () => {
//         const accounts = await web3.eth.getAccounts();
//         const contract = new web3.eth.Contract(contractABI, contractAddress);

//         await contract.methods.addOperation(
//             operation.SoldierID,
//             operation.OperationName,
//             operation.Status,
//             operation.Result,
//             operation.Note
//         ).send({ from: accounts[0] });
//     };

//     return (
//         <div className="soldier">
//             <Header />
//             <h2 className="sol">Add Soldier</h2>
//             <input type="text" name="ID" placeholder="ID" onChange={handleSoldierChange} />
//             <input type="text" name="Name" placeholder="Name" onChange={handleSoldierChange} />
//             <input type="date" name="PersonalInformation.DateOfBirth" placeholder="Date of Birth" onChange={handleSoldierChange} />
//             <input type="text" name="BloodGroup" placeholder="Blood Group" onChange={handleSoldierChange} />
//             <input type="text" name="PhoneNumber" placeholder="Phone Number" onChange={handleSoldierChange} />
//             <input type="text" name="Address" placeholder="Address" onChange={handleSoldierChange} />
//             <input type="text" name="IdentityMarks" placeholder="Identity Marks" onChange={handleSoldierChange} />
//             <input type="text" name="Position" placeholder="Position" onChange={handleSoldierChange} />
//             <input type="text" name="Specialization" placeholder="Specialization" onChange={handleSoldierChange} />
//             <button onClick={handleAddSoldier}>Add Soldier</button>

//             <h2>Add Operation</h2>
//             <input type="text" name="SoldierID" placeholder="Soldier ID" onChange={handleOperationChange} />
//             <input type="text" name="OperationName" placeholder="Operation Name" onChange={handleOperationChange} />
//             <input type="text" name="Status" placeholder="Status" onChange={handleOperationChange} />
//             <input type="text" name="Result" placeholder="Result" onChange={handleOperationChange} />
//             <input type="text" name="Note" placeholder="Note" onChange={handleOperationChange} />
//             <button onClick={handleAddOperation}>Add Operation</button>
//         </div>
//     );
// }

// export default InputForm;
import React, { useState } from 'react';
import Header from './Header';
import Web3 from 'web3';

function InputForm() {
    const [soldier, setSoldier] = useState({});
    const [operation, setOperation] = useState({});

    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'));
    }

    const contractAddress = "0x5cb2d70149ce2182fba55bfe5817378a4f06f922";
    const contractABI = [
    ];

    const handleSoldierChange = (e) => {
        setSoldier({ ...soldier, [e.target.name]: e.target.value });
    };

    const handleOperationChange = (e) => {
        setOperation({ ...operation, [e.target.name]: e.target.value });
    };

    const handleAddSoldier = async () => {
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        await contract.methods.addSoldier(
            soldier.ID,
            soldier.Name,
            soldier.DateOfBirth,
            soldier.BloodGroup,
            soldier.PhoneNumber,
            soldier.Address,
            soldier.IdentityMarks,
            soldier.Position,
            soldier.Specialization
        ).send({ from: accounts[0] });
    };

    const handleAddOperation = async () => {
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        await contract.methods.addOperation(
            operation.ID,
            operation.OperationName,
            operation.Status,
            operation.Result,
            operation.Note
        ).send({ from: accounts[0] });
    };

    return (
        <div className="soldier">
            <Header />
            <h2 className="sol">Add Soldier</h2>
            <input type="text" name="ID" placeholder="ID" onChange={handleSoldierChange} />
            <input type="text" name="Name" placeholder="Name" onChange={handleSoldierChange} />
            <input type="date" name="DateOfBirth" placeholder="Date of Birth" onChange={handleSoldierChange} />
            <input type="text" name="BloodGroup" placeholder="Blood Group" onChange={handleSoldierChange} />
            <input type="text" name="PhoneNumber" placeholder="Phone Number" onChange={handleSoldierChange} />
            <input type="text" name="Address" placeholder="Address" onChange={handleSoldierChange} />
            <input type="text" name="IdentityMarks" placeholder="Identity Marks" onChange={handleSoldierChange} />
            <input type="text" name="Position" placeholder="Position" onChange={handleSoldierChange} />
            <input type="text" name="Specialization" placeholder="Specialization" onChange={handleSoldierChange} />
            <button onClick={handleAddSoldier}>Add Soldier</button>

            <h2>Add Operation</h2>
            <input type="text" name="ID" placeholder="Soldier ID" onChange={handleOperationChange} />
            <input type="text" name="OperationName" placeholder="Operation Name" onChange={handleOperationChange} />
            <input type="text" name="Status" placeholder="Status" onChange={handleOperationChange} />
            <input type="text" name="Result" placeholder="Result" onChange={handleOperationChange} />
            <input type="text" name="Note" placeholder="Note" onChange={handleOperationChange} />
            <button onClick={handleAddOperation}>Add Operation</button>
        </div>
    );
}

export default InputForm;
