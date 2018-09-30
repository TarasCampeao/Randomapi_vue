<template>
	<div class="name-block">
	    <navi-cell></navi-cell>
	    <!-- <transition-group name="list" tag="ul" class="user_list collapse"> -->
	    <ul class="user_list collapse">
	      <li class="people_cell" v-for="(user, index) in items.results" :class="{ collapsed: detectItem(user) }" :key="user.id.value">
	      	<div class="main_info" @click="toggleItem(user)">
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
	    <!-- </transition-group> -->
	</div>
</template>



<script>

export default {
	name: 'NameList',
	data() {
		return {
			results: [],
			items: [],
	        selectedItem: null,
	        handleSelf: 'false',
            bodyHeight: 0,
            user: ''
		}
	},
	mounted() {
		fetch("https://randomuser.me/api/?results=6")
		.then(response => response.json())
		.then((data) => {
			this.items = data;
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
	    }


	},
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },

	filters: {
		sliceDate(value) {
			return `${value.slice(0, 10)}`
		}
	}
}	

</script>
