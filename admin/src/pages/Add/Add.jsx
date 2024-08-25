import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assests';
import axios from "axios"
import { toast } from 'react-toastify';
const Add = ({url}) => {
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler =async(e)=>{
        e.preventDefault();
        if (!image) {
            alert("Please upload an image");
            return;
          }
        const formData =new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("price",Number(data.price));
        formData.append("image",image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }

    }
  return (
    <div className='add'>
       <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
        <p>Upload image</p>
        <label htmlFor="image">
            <img src={image?URL.createObjectURL(image): assets.upload} alt="up" style={{maxWidth:"120px"}}/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden  />
        </div>
        <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="add-product-des flex-col">
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="add-category-price flex-col">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select onChange={onChangeHandler} value={data.category} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Pies">Pies</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Chickens">Chickens</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product price</p>
                <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
       </form>
      
    </div>
  )
}

export default Add
