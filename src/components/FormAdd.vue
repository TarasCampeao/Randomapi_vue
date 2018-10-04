<template>
	<div class="form_user">
		<form class="form_zone">
			<div class="fill_bit">
				<label for="first_name">First name</label>
				<input id="first_name" type="text" name="text" v-model="firstName">
			</div>
			<div class="fill_bit">
				<label for="last_name">Last name</label>
				<input id="last_name" type="text" name="name" v-model="lastName">
			</div>
			<div class="fill_bit">
				<label for="username_name">Username</label>
				<input id="username_name" type="text" name="name" v-model="username">
			</div>
			<div class="fill_bit">
				<label for="phone_name">Phone</label>
				<input id="phone_name" type="tel" name="text" v-model="phone">
			</div>
			<div class="fill_bit">
				<label for="location_name">Location</label>
				<input id="location_name" type="text" name="name" v-model="location">
			</div>
			<button class="form_btn common_btn" type="submit" @click.prevent="addContact">Save</button>
		</form>
	</div>
</template>


<script>


export default {
	data() {
		return {
			username: null,
			firstName: null,
			lastName: null,
			phone: null,
			location: null,
			showAlert: true,
            alertMessage: ''
		}
	},
	methods: {
        addContact() {
            const {
                username,
                firstName,
                lastName,
                phone,
                location
            } = this;
            const valid = !!(username && firstName && lastName && phone && location);
	        if (valid) {
                 const newUser = {
                    username,
                    firstName,
                    lastName,
                    phone,
                    location
                };
                 // TODO
                this.$emit('update:items', [...this.items, newUser]);
	        }
        }
    }
}
</script>
