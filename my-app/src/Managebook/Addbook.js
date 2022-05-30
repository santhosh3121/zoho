import React from "react";
import "./Addbook.css";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Addbook extends React.Component
{
    constructor(props) 
    {
      super(props);
      this.state = { bookid: '', bookname: '',gstin:'',publication:'',quantity:'',description:'' }
      this.state={show:true,password:''}
      this.bookid = this.bookid.bind(this);
      this.bookname= this.bookname.bind(this);
      this.gstin = this.gstin.bind(this);
      this.publication = this.publication.bind(this);
      this.quantity = this.quantity.bind(this);
      this.description = this.description.bind(this);
  }
  bookid(event)
  {
      this.setState({bookid:event.target.value});
  }
  bookname(event)
  {
    this.setState({bookname:event.target.value}); 
  }

  gstin(event)
  {
    this.setState({gstin:event.target.value}); 
  }
 
  publication(event)
  {
    this.setState({publication:event.target.value}); 
  }
  quantity(event)
  {
    this.setState({quantity:event.target.value}); 
  }
  description(event)
  {
    this.setState({description:event.target.value}); 
  }
  butsub(event)
  {
    event.preventDefault();

    var bookid = document.forms["formlogin"]["bookid"].value;
    var bookn = document.forms["formlogin"]["bookname"].value;
    var bookg = document.forms["formlogin"]["gstin"].value;
    var bookp = document.forms["formlogin"]["publication"].value;
    var bookq = document.forms["formlogin"]["quantity"].value;
    var bookd = document.forms["formlogin"]["description"].value;

    let data = { bookid: this.state.bookid, bookname: this.state.bookname,gstin: this.state.gstin,
        publication:this.state.publication, quantity:this.state.quantity, description:this.state.description};

        if(bookid == "" || bookn=="" || bookg=="" || bookp ==""|| bookq=="" || bookd=="")
        {
            toast.warn("Field is empty",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
        }
        else{
            axios.post().then(res =>
            {
               if(res.status==200)
               {
                   toast.success("Field is empty",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
               }
            }).catch(err=>
                {
                    toast.warn("server error",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
                })
        }
  }
  

    render()
    {
        return(
            
        <div className="bookadd">
           <div className="formclass">
               <h2>Add Book</h2>
                <form className="formitem" id="formlogin">
                    <div className="wrapperform">
                        <label>Book ID</label>
                            <input type = "text"placeholder="Book ID" maxLength="10"
                            value={this.state.bookid} onChange={this.bookid} id="bookid" required/>
                    </div>
                   
                    <div className="wrapperform">
                        <label>Book Name</label>
                            <input type = "text" placeholder="Book Name" 
                            value={this.state.bookname} onChange={this.bookname} id="bookname" required/>
                    </div>
                    <div className="wrapperform">
                        <label>GSTIN</label>
                            <input type = "text" placeholder="GSTIN" maxLength="17"
                            value={this.state.gstin} onChange={this.gstin} id="gstin" required/>
                    </div>
                    <div className="wrapperform">
                        <label>Publication</label>
                            <input type = "text" placeholder="publication" maxLength="20"
                            value={this.state.publication} onChange={this.publication} id="publication" required/>
                    </div>
                    <div className="wrapperform">
                        <label>Quantity</label>
                            <input type = "text"placeholder="Quantity"
                            value={this.state.quantity} onChange={this.quantity} id="quantity" required/>
                    </div>
                    <div className="wrapperform">
                        <label>Description</label>
                            <textarea className="textarea" type = "text" placeholder="Description" maxLength="150" 
                            value={this.state.description} onChange={this.description} id="description" required/>
                    </div>
                    <div className="wrapperform">
                       <button className="buttonsubmit" onClick={this.butsub} >
                        Add
                      </button>
                    </div>
                </form>
            </div>    
        </div>

        );
    }
}
export default Addbook;