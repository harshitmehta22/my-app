import React from "react";
class NewBook extends React.Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.state = {
        message: "",
        newbook: {
          key: Date.now(),
          Title: "",
          Author: "",
          Genre :"",
          YearReleased: ""
        }
      };
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.setState({ message: 'Sending...' }, this.sendFormData);
    }
  
  sendFormData() {
    var formData = {
        Title: this.refs.Title.value,
        Author: this.refs.Author.value,
        Genre: this.refs.Genre.value,
        YearReleased: this.refs.YearReleased.value};
    setTimeout(() => { 
      console.log(formData);
      this.setState({ message: 'data sent!' });
    }, 3000);
  }
  
  
    render () {
      return (
        <div>
          <h1>New Book</h1>
          {this.state.message}
          <form onSubmit={this.handleSubmit}>
              <p> <label for="title">Title</label><input id="title" type="text" ref="Title" /></p>
              <p><label for="author">Author</label><input id="author" type="text" ref="Author" /></p>
              <p><label for="genre">Genre</label><input id="genre" type="text" ref="Genre" /></p>
              <p><label for="first_published">First Published</label><input id="first_published" type="text" ref="YearReleased"  /></p>
              <p><input type="submit"/></p>
          </form>
        </div>
      )
    }
  }
  export default NewBook;   
  
//   ReactDOM.render(
//     <NewBook />,
//     document.getElementById('root')
//   );
  