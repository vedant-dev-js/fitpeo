import React from 'react';
import Layout from './Layout';

export default function Users() {
  const tabledata = [
    {
      "itemId": 1,
      "upc": "123456789012",
      "itemName": "Item A",
      "itemDesc": "Description of Item A",
      "itemCategory": "Category 1",
      "itemQuantity": 10,
      "dateModified": "2024-08-01",
      "quickAction": "Edit"
    },
    {
      "itemId": 2,
      "upc": "234567890123",
      "itemName": "Item B",
      "itemDesc": "Description of Item B",
      "itemCategory": "Category 2",
      "itemQuantity": 15,
      "dateModified": "2024-08-02",
      "quickAction": "Edit"
    },
    {
      "itemId": 3,
      "upc": "345678901234",
      "itemName": "Item C",
      "itemDesc": "Description of Item C",
      "itemCategory": "Category 3",
      "itemQuantity": 20,
      "dateModified": "2024-08-03",
      "quickAction": "Edit"
    },
    {
      "itemId": 4,
      "upc": "456789012345",
      "itemName": "Item D",
      "itemDesc": "Description of Item D",
      "itemCategory": "Category 4",
      "itemQuantity": 25,
      "dateModified": "2024-08-04",
      "quickAction": "Edit"
    },
    {
      "itemId": 5,
      "upc": "567890123456",
      "itemName": "Item E",
      "itemDesc": "Description of Item E",
      "itemCategory": "Category 5",
      "itemQuantity": 30,
      "dateModified": "2024-08-05",
      "quickAction": "Edit"
    },
    {
      "itemId": 6,
      "upc": "678901234567",
      "itemName": "Item F",
      "itemDesc": "Description of Item F",
      "itemCategory": "Category 1",
      "itemQuantity": 35,
      "dateModified": "2024-08-06",
      "quickAction": "Edit"
    },
    {
      "itemId": 7,
      "upc": "789012345678",
      "itemName": "Item G",
      "itemDesc": "Description of Item G",
      "itemCategory": "Category 2",
      "itemQuantity": 40,
      "dateModified": "2024-08-07",
      "quickAction": "Edit"
    },
    {
      "itemId": 8,
      "upc": "890123456789",
      "itemName": "Item H",
      "itemDesc": "Description of Item H",
      "itemCategory": "Category 3",
      "itemQuantity": 45,
      "dateModified": "2024-08-08",
      "quickAction": "Edit"
    },
    {
      "itemId": 9,
      "upc": "901234567890",
      "itemName": "Item I",
      "itemDesc": "Description of Item I",
      "itemCategory": "Category 4",
      "itemQuantity": 50,
      "dateModified": "2024-08-09",
      "quickAction": "Edit"
    },
    {
      "itemId": 10,
      "upc": "012345678901",
      "itemName": "Item J",
      "itemDesc": "Description of Item J",
      "itemCategory": "Category 5",
      "itemQuantity": 55,
      "dateModified": "2024-08-10",
      "quickAction": "Edit"
    }
  ];

  return (
    <Layout>
       <h1 className='fw-bold text-white p-3 ps-5'>Statistics</h1>
      <div className='container rounded bg-darker table-responsive '>
     
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th>Items Id</th>
              <th>UPC</th>
              <th>Items Name</th>
              <th>Items Desc</th>
              <th>Items Category</th>
              <th>Items Quantity</th>
              <th>Date Modified</th>
              <th>Quick Action</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((value, ind) => (
              <tr key={ind}>
                <td>{value.itemId}</td>
                <td>{value.upc}</td>
                <td>{value.itemName}</td>
                <td>{value.itemDesc}</td>
                <td>{value.itemCategory}</td>
                <td>{value.itemQuantity}</td>
                <td>{value.dateModified}</td>
                <td><button className='btn btn-primary p-2' >{value.quickAction}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
