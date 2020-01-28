import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: "",
      name: "",
      friendList: []
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAdd = () => {
    const { picture, name, friendList } = this.state;

    this.setState({
      friendList: friendList.concat({ picture, name }),
      // friendList: [...friendList, { picture, name }],  //bringing in the previous friends
      picture: "",
      name: ""
    });

    //OR the old way

    // let friends = friendList.slice();
    // friends.push({picture,name});
    // this.setState({
    //   friendList: friends,
    //   picture: '',
    //   name: ''
    // });
  };

  render() {
    let friend = this.state.friendList.map(el => (
      <div key={el + 1}>
        <img src={el.picture}></img>
        <span>{el.name}</span>
      </div>
    ));
    return (
      <div>
        <span>Picture:</span>
        <input
          name="picture"
          onChange={this.handleInputChange}
          value={this.state.picture}
        />
        <span>Name:</span>
        <input
          name="name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <button onClick={this.handleAdd}>Add Friend</button>
        {friend}
      </div>
    );
  }
}
export default App;

// this.setState({[e.target.name]:e.target.value})







// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       pets: [],
//       picture: "",
//       name: ""
//     };
//   }

//   updatePicture(value) {
//     this.setState({ picture: value });
//   }

//   updateName(value) {
//     this.setState({ name: value });
//   }

//   addPet() {
//     const { pets, picture, name } = this.state;

//     let newPets = pets.slice();
//     newPets.push({ picture, name });

//     this.setState({ pets: newPets, picture: "", name: "" });
//     //to clear the input field.
//   }

//   render() {
//     let pets = this.state.pets.map((pet, index) => (
//       <ol>
//         <li key={`friend-${pet}=${index}-${pet.name}`}>
//           <img width="100px" src={pet.picture} />
//           <span>{pet.name} </span>
//         </li>
//       </ol>
//     ));
//     return (
//       <div>
//         <span>Picture:</span>
//         <input
//           onChange={e => this.updatePicture(e.target.value)}
//           value={this.state.picture}
//         />

//         <span>Name:</span>
//         <input
//           onChange={e => this.updateName(e.target.value)}
//           value={this.state.name}
//         />

//         <button onClick={() => this.addPet()}>Add Your Pet!</button>
//         {pets}
//       </div>
//     );
//   }
// }

// export default App;
