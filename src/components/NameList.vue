<template>
	<div class="name-block">
	    <navi-cell v-if="items.results.length"></navi-cell>
	    <p v-if="!items.results.length">No results!</p>
	    <ul v-if="items.results.length" class="user_list collapse">
	      <li class="people_cell" v-for="(user, index) in items.results" :class="{ collapsed: detectItem(user) }" :key="user.id.value">
	      	<div class="main_info" @click="toggleItem(user)">
	      		<div class="stnd_div">
			      	<div class="img_user img_size">
			      		<img :src="user.picture.large" alt=""/>
			      	</div>
	      		</div>
		      	<div class="stnd_div last_name"><span>Last</span> {{user.name.last}}</div>
		      	<div class="stnd_div first_name"><span>First</span> {{user.name.first}}</div>
		      	<div class="stnd_div first_name"><span>Username</span> {{user.login.username}}</div>
		        <div class="stnd_div cell_user"><span>Phone</span> {{user.cell}}</div>
		        <div class="stnd_div location_user"><span>Location</span> {{user.location.state}}</div>
		        <button class="btn_more">
		        	<i class="fas fa-plus"></i>
		        </button>
	        </div>
	        <div class="more_info collapse_body" :class="{ show: detectItem(user) }" :style="{ height: toggleHeight(user) }">
	        	<div>
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
	        </div>
	        <button class="delete_btn" @click="removeUser(user, index)">
	        	<i class="fas fa-trash-alt"></i>
	        </button>
	      </li>
	    </ul>
	</div>
</template>



<script>

export default {
	name: 'NameList',
	//props: ['items'],
	data() {
		return {
			results: [],
			items: [],
	        selectedItem: null,
	        handleSelf: 'false',
            bodyHeight: 0
		}
	},
	mounted() {
		fetch("https://randomuser.me/api/?results=6")
		.then(response => response.json())
		.then((data) => {
			this.items = data;
			console.log(this.items)
		});
	},
	methods: {
	    getGender(gender) {
	    	switch(gender) {
	    		case "female": return "fas fa-female"
	    		case "male": return "fas fa-male"
	    	}
	    },
	    //accordeon
	    detectItem(user) {
	      return this.selectedItem === user;
	    },
	    toggleItem(user) {
	      let target = event.currentTarget;
	      let targetBody = target.nextElementSibling;
	      let targetBodyContainer = targetBody.firstElementChild;
	      
	      if (this.accordion) {
	        if (targetBody.style.height === '0px') {
	          targetBody.style.height = targetBodyContainer.offsetHeight + 'px';
	        } else {
	          targetBody.style.height = 0;
	        }
	        return;
	      }

	      this.bodyHeight = targetBodyContainer.offsetHeight + 'px';

	      if (this.handleSelf) {
	        if (this.detectItem(user)) {
	          this.selectedItem = null;
	        } else {
	          this.selectedItem = user;
	        }
	      } else {
	        this.selectedItem = user;
	      }
	    },
	    toggleHeight(user) {
	      if (this.detectItem(user)) {
	        return this.bodyheight = "230px";
	      } else {
	        return 0;
	      }
	    },
	    //remove user
	    removeUser(user, index) {
	    	this.items.results.splice(index, 1);
	    },
	},

	filters: {
		sliceDate(value) {
			return `${value.slice(0, 10)}`
		}
	},
}	

</script>



