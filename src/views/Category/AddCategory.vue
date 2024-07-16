<template>
    <div>
       <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt3">Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <form >
                <div class="form-group">
                    <label for="">Category Name</label>
                    <input type="text" required class="form-control" v-model="categoryName" placeholder="Enter Category Name">
                </div>
                <div class="form-group">
                    <label for="">Category Description</label>
                    <input type="text" required class="form-control" v-model="description" placeholder="Enter Category Description">
                </div>
                <div class="form-group">
                    <label for="">Category Image</label>
                    <input type="text" required class="form-control" v-model="ImageUrl" placeholder="Enter Category Image">

                </div>
                <button type="button" @click="addCategory"> Submit</button>
            </form>
            </div>
            <div class="col-3"></div>
        </div>

       </div>
    </div>
</template>

<script>
import axios from 'axios';
import sweetalert from 'sweetalert'
export default {
    name:'addcategory',
    data() {
        return {
           description: '',
           categoryName: '',
           ImageUrl:'' 
        }
    },
    methods:{
        addCategory(){
            const newCategory={
                categoryName:this.categoryName,
                description:this.description,
                ImageUrl:this.ImageUrl,
            }
            console.log(this.categoryName,this.description)
            const baseURL ='https://limitless-lake-55070.herokuapp.com'
            axios({
                method:'get',
                url:`${baseURL}/category/`,
                data:JSON.stringify(newCategory),
                headers: {
                    'Content-Type':'application/json'
                }
            }).then(()=>{
                sweetalert({
                    text:'Category added succesfully',
                    icon:'success',
                })
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    margin: 0;
}
.title-cont{
padding-top: 2rem;
}
.title-cont>h3{
    text-align: center;
    font-weight: bold;
    color: red;
}
</style>