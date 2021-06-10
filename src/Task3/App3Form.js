import React, { Component } from "react";

class App3Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: null,
      title: '',
      body: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    let item = props.editItem ? props.editItem : {
      id: null,
      title: '',
      body: '',
    };

    if (state.itemId !== item.id) {
      return {
        itemId: item.id,
        title: item.title,
        body: item.body,
      };
    }

    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let oldItem = this.props.editItem || {};

    this.props.handleSubmit({
      ...oldItem,
      title: this.state.title,
      body: this.state.body,
    });

    if (!this.props.editItem) this.reset();
  };

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      itemId: null,
      title: '',
      body: '',
    });
  }

  render() {

    let { title, body} = this.state,
      {handleCancel, editItem } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{editItem ? `Edit item "${editItem.title}"` : "Create item"}</h2>
        <div>
          <h3>Title:</h3>
          <input name="title" onChange={this.handleChange} value={title} type="text" />
        </div>
        <div>
          <h3>Body:</h3>
          <textarea name="body" onChange={this.handleChange} value={body} />
          {editItem && (
            <button onClick={handleCancel}>Cancel</button>
          )}
        </div>
      </form>
    );
  }

}

export default App3Form;
