import React, { Component } from "react";
import axios from "axios";

import App3Form from "./Task3/App3Form"

class App3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editItemById: null,
      error: null,
      data: [],
    };

  }

  getData = () => {
    axios.get("https://60bb880442e1d00017620c95.mockapi.io/Posts/")
      .then((res:AxiosResponse<T>) => {

        let {status, data } = res;
        let error = status === 200 ? null : `Something went wrong. Error code: ${status}`;
        this.setState({
          error,
          data,
        });
      })
      .catch((error) => {

        this.setState({
          error: "error in getting data request",
          data: null,
        });
      });
  }

  handleEditItem = (id) => {

    this.setState({
      editItemById: id,
    });
    console.log(`editing data item with id: ${id}`);
  };

  handleDeleteItem = (id) => {
    let newData = this.state.data.filter((item) => item.id !== id);

    this.setState({
      data: newData,
    });
    
    axios.delete(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${id}`)     //удаление delete
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Delete error");
      });

    console.log(`data item with id: ${id} was deleted`);
  }

  handleSubmitItem = (item) => {
    let itemIndex = this.state.data.findIndex(el => el.id === item.id),
    nextItems = [...this.state.data];


    if (itemIndex > -1) {
      nextItems[itemIndex] = {
        ...nextItems[itemIndex],
        ...item,
      };
      axios.put(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${nextItems.length}`, {      //эдит put
        title: item.title,
        body: item.body,
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("Put error");
        });

      console.log(`${nextItems.length}`, "a", item);
    }

    else {
      nextItems.push({
        id: `${nextItems.length + 1}`,
        ...item,
      });

      axios.post('https://60bb880442e1d00017620c95.mockapi.io/Posts/', {      //создание post
        id: `${nextItems.length}`,
        title: item.title,
        body: item.body,
      })
    .then((res:AxiosResponse<T>) => {
      console.log(res.data);
    })
    .catch(error => {
      console.log("Post error");
    });

    console.log(`new data item was added with id: ${nextItems.length}`);
    }

    this.setState({
      data: nextItems,
      editItemById: null,
    });

  };

  render() {

    let {editItemById, data, error} = this.state;
    console.log(data);
    return (
      <div className="thirdTask">
        {error !== null ? (
          <div>Olllu6ka! {error}</div>
        ) : (
          <>
          <div>
            <App3Form
              editItem={data.find(el => el.id === editItemById)}
              handleCancell={() => this.handleEditItem(null)}
              handleSubmit={this.handleSubmitItem}
            />
          </div>
          <div>
            {[...data].reverse().map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <div>
                  <button onClick = {() => this.handleEditItem(item.id)}>Edit</button>
                  <button onClick ={() => this.handleDeleteItem(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          </>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.getData();
  }

}

export default App3;
