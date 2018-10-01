<template>
	<div class="form_user">
		<form class="form_zone">
	        <div class="alert" v-if="!showAlert">
	            {{alertMessage}}
	        </div>
			<div class="fill_bit">
				<label for="firt_name">First name</label>
				<input id="first_name" type="text" name="first" v-model="first">
			</div>
<!-- 			<div class="fill_bit">
				<label for="last_name">Last name</label>
				<input id="last_name" type="text" name="name" v-model="last">
			</div> -->
<!-- 			<div class="fill_bit">
				<label for="username_name">Username</label>
				<input id="username_name" type="text" name="name" v-model="username">
			</div> -->
			<div class="fill_bit">
				<label for="phone_name">Phone</label>
				<input id="phone_name" type="tel" name="phone" v-model="phone">
			</div>
<!-- 			<div class="fill_bit">
				<label for="location_name">Location</label>
				<input id="location_name" type="text" name="name" v-model="location">
			</div> -->
			<button class="form_btn common_btn" type="submit" @click.prevent="addContact">Save</button>
		</form>
		<ul>
			<li v-for="contact in contacts" :key="contact.id">
				<div>{{contact.first}}</div>
				<div>{{contact.phone}}</div>
			</li>
		</ul>
	</div>
</template>


<script>
	

export default {
	data() {
		return {
			items: [],
			contacts: [
                    {
                        first: "mike",
                        phone: "23345",
                        id: "123123123123123"   
                    },
                    {
                        first: "alan",
                        phone: "123123",
                        id: "5856786895"    
                    },
			],
			results: [],
			first: '',
			//last: '',
			//username: '',
			phone: '',
			showAlert: true,
            alertMessage: ''
			//location: ''
		}
	},
	methods: {
            addContact(){
                if(this.first != '' && this.phone != '') {
                    this.contacts.push({first:  this.first, phone: this.phone});
                    this.first ='';
                    this.phone ='';
                    this.showAlert = true;
                } else if(this.first == '' || this.phone ==''){
                    this.alertMessage = "Please fill the inputs."
                    this.showAlert = false;
                }
                console.log("Working!")
            }
    }
}
</script>
