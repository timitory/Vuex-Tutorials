<!-- <template>
    <div class="">
        <h1>Form Input Practice</h1>
        <form @submit.prevent="handleSubmit">
            <label >Email</label>
            <input type="email" placeholder="john@gmail.com" required v-model="email">
            <label for="password" > PASSWORD</label>
            <input type="password" placeholder="Enter Password" required v-model="password">
            <h6 v-if="passwordError" class="error">{{ passwordError }}</h6>
            <label for="role">Role</label>
            <select name="" id="" v-model="role">
                <option value="developer">Web Developer</option>
                <option value="marketer">Marketer</option>
                <option value="web designer">Web Designer</option>
                <option value="graphic designer">Graphics Designer</option>

            </select>
            <label for="skill">SKILLS</label>
            <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
            <div v-for="(skill) in skills" :key="skill"   class="pill">
              <span @click="deleteSkill(skill)">  {{ skill }}</span>
            </div>
            <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label >Accept Terms And Conditions</label>
            </div>
                
            <div>
                <input type="checkbox" value="shaun" v-model="names ">
                <label for="">Shaun</label>
            </div>
            <div>
                <input type="checkbox" value="Timi" v-model="names ">
                <label for="">Timi</label>
            </div>
            <div>
                <input type="checkbox" value="Paul" v-model="names ">
                <label for="">Paul</label>
            </div>
            <div class="submit">
                <button>create account</button>
            </div>



           
        </form>
        <h1>Email: {{ email }}</h1> | <h1>PASSWORD:{{ password }}</h1>
       <h1>ROLE:{{ role }}</h1>
       <h1>TERMS ACCEPTED:{{ terms }}</h1>
       <h1>NAMES:{{ names }}</h1>

    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'developer',
            terms:false,
            names: [],
            tempSkill:'',
            skills:[],
            passwordError:''

        }
    },
    methods:{
        addSkill(e) {
            if (e.key ===',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill=''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return skill !== item
            })

        },
        handleSubmit(){
            //validating password
            this.passwordError = this.password.length > 6 ? '' :'Password must be 6 characters long'
            console.log('form submitted')
            if(!this.passwordError){
                console.log(this.email)
                console.log(this.password)
                console.log(this.skills)
                console.log(this.role)
            }
        }
    }
}

</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    display: inline-block;
    color: grey;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    outline: none;

}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer
}
.submit{
    text-align: center;
}
button{
    color: white;
    background-color: blue;
    font-size: 12px;
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    text-transform: uppercase;

}
.error{
    color: red;
    font-weight: bold;
}
.header{
    background: white;
    width: 100%;
    box-sizing: border-box;

}
.header>h1{
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 0;

}
</style> -->