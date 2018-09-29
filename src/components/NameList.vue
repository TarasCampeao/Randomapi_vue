<template>
	<div class="name-block">
	    <ul class="header_list">
	      <li></li>
	      <li>Last</li>
	      <li>First</li>
	      <li>Username</li>
	      <li>Phone</li>
	      <li>Location</li>
	    </ul>
	    <ul class="user_list">
	      <li class="people_cell" v-for="user in items.results" :key="user.seed">
	      	<div class="main_info">
	      		<div class="stnd_div">
			      	<div class="img_user img_size">
			      		<img :src="user.picture.large" alt=""/>
			      	</div>
	      		</div>
		      	<div class="stnd_div last_name">{{user.name.last}}</div>
		      	<div class="stnd_div first_name">{{user.name.first}}</div>
		      	<div class="stnd_div first_name">{{user.login.username}}</div>
		        <div class="stnd_div cell_user">{{user.cell}}</div>
		        <div class="stnd_div location_user">{{user.location.state}}</div>
		        <button class="btn_more" @click="visible = !visible">
		        	<i class="fas fa-plus"></i>
		        </button>
	        </div>
	        <div class="more_info" v-show="!visible">
	        	<div class="main_name">{{user.name.first}} <i :class="getGender(user.gender)"></i></div>
	        	<ul class="detail_list">
	        		<li>
	        			<div><strong>Username</strong> {{user.login.username}}</div>
	        			<div><strong>Registered</strong> {{user.registered.date | sliceDate}}</div>
	        			<div><strong>Email</strong> {{user.email}}</div>
	        		</li>
	        		<li>
	        			<div><strong>Address</strong> {{user.location.street}}</div>
	        			<div><strong>City</strong> {{user.location.city}}</div>
	        			<div><strong>Zip Code</strong> {{user.location.postcode}}</div>
	        		</li>
	        		<li>
	        			<div><strong>Birthday</strong> {{user.dob.date | sliceDate}}</div>
	        			<div><strong>Phone</strong> {{user.phone}}</div>
	        			<div><strong>Cell</strong> {{user.cell}}</div>
	        		</li>
	        		<li>
	        			<div class="img_user img_more img_size">
	        				<img :src="user.picture.large" alt=""/>
	        			</div>
	        		</li>
	        	</ul>
	        </div>
	      </li>
	    </ul>
	</div>
</template>



<script>


export default {
	name: 'NameList',
	data() {
		return {
			results: [],
			items: [],
			visible: true
		}
	},
	mounted() {
		fetch("https://randomuser.me/api/?results=6")
		.then(response => response.json())
		.then((data) => {
			this.items = data;
		}) 
	},
	methods: {
	    getGender(gender) {
	    	switch(gender) {
	    		case "female": return "fas fa-female"
	    		case "male": return "fas fa-male"
	    	}
	    }
	},
	filters: {
		sliceDate(value) {
			return `${value.slice(0, 10)}`
		}
	}
}	

</script>
