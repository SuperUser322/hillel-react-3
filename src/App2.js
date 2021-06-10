import React, { Component } from "react";
import axios from "axios";

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      data: null,
    };
  }

  makeRequest = () => {
    axios.get("https://60bb880442e1d00017620c95.mockapi.io/Posts/")
      .then((res:AxiosResponse<T>) => {

        let { status, data } = res;
        let error = status === 200 ? null : `Something went wrong. Error code: ${status}`;

        this.setState({
          error,
          data,
          isLoading: false,
        });
      })
      .catch((error) => {

        this.setState({
          error: "текст ошибки вместо данных",
          data: null,
          isLoading: false,
        });
      });

      this.setState({
        isLoading: true,
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="secondTask">
        {this.state.isLoading !== false ? (
          <div>Загрузка...</div>
        ) : (
          <div>
            {this.state.error !== null ? (
              <div>Olllu6ka! {this.state.error}</div>
            ) : (
              <div>{this.state.data !== null && this.state.data.map(el => (
                <div key={el.id}>{el.createdAt}<h3>{el.title}</h3><p>{el.body}</p></div>
              ))}</div>
            )}
          </div>
          )}
      </div>
    );
  }

  componentDidMount = () => {
    this.makeRequest();
  }

}

export default App2;
