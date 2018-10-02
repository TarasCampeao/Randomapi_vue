<template>
	<div class="form_user">
		<form class="form_zone">
<!-- 			<div class="fill_bit">
				<label for="firt_name">First name</label>
				<input id="first_name" type="text" name="text" v-model="first">
			</div> -->
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
				<input id="phone_name" type="tel" name="text" v-model="phone">
			</div>
<!-- 			<div class="fill_bit">
				<label for="location_name">Location</label>
				<input id="location_name" type="text" name="name" v-model="location">
			</div> -->
			<button class="form_btn common_btn" type="submit" @click.prevent="addContact">Save</button>
		</form>
	</div>
</template>


<script>
	

export default {
	data() {
		return {
			items: [],
			results: [],
			//first: '',
			//last: '',
			//username: '',
			phone: '',
			showAlert: true,
            alertMessage: ''
			//location: ''
		}
	},
	methods: {
        // addContact(){
        //     if(this.phone != '') {
        //         this.items.push(this.items.results[0]);
        //         //this.first ='';
        //         this.phone ='';
        //         this.showAlert = true;
        //     }
        //     // else if(this.phone ==''){
        //     //     this.alertMessage = "Please fill the inputs."
        //     //     this.showAlert = false;
        //     // }
        //     console.log("Working!")
        // }
    }
}
</script>
