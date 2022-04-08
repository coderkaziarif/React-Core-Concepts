import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Razzak', 'Salman', 'Shabnur', 'Sara', 'Jasim', 'Sharuk'];
  const friends = ['Dr. Youns', 'Salman khan', 'Tolin', 'Rajib', 'Rahul', 'Rimon', 'Alomgir'];

  // var person = {
  //   name: "Dr. Sharma",
  //   job: "Doctor",
  //   city: "Dhaka",
  //   age: 45
  // }

  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" }
  ]

  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello! My first React App</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }

        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          friends.map(fnd => <Friends bondhu={fnd}></Friends>)
        }

        <Person name="Munna" job="Footballer" money="$520000"></Person>
        <Person name="Masum" job="Fans" money="$2200"></Person>
        <Person name="Tamim" job="Cricketer" money="$7520000"></Person>
        <Person name="Hasina" job="Politician" money="$52000000"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  // const newCount = count + 1;

  // const handleDecrease = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {console.log(users)}
        {
          users.map(user => <li>{user.name + " " + user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Friends(props) {
  const friendsStyle = {
    width: '300px',
    border: '1px solid blue',
    borderRadius: '20px',
    margin: '20px',
    padding: '15px',
  }

  return (
    <div style={friendsStyle}>
      <h3>Name: {props.bondhu}</h3>
      <h5>my best friend</h5>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    width: "300px",
    height: "200px",
    border: "2px solid orange",
    borderRadius: "5px",
    BackgroundColor: "lightGray",
    margin: "15px",
    padding: "10px"
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    width: "400px",
    border: "2px solid orange",
    margin: "15px",
    padding: "10px"

  }
  return (
    <div style={personStyle}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
      <p>Money : {props.money}</p>
    </div>
  )
}

export default App;
