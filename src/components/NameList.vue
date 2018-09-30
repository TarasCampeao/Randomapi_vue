<template>
	<div class="name-block">
	    <navi-cell></navi-cell>
	    <ul class="user_list collapse" data-collapse v-if="items.results != null">
	      <li class="people_cell" v-for="(user, index) in items.results" :class="{ collapsed: detectItem(user) }" :key="user.seed">
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

	        <button class="delete_btn">
	        	<i class="fas fa-trash-alt"></i>
	        </button>
	      </li>
	    </ul>


<!-- 	    <div class="collapse" data-collapse v-if="items.results != null">
	      <div v-for="(user, index) in items.results" class="collapse_user" :class="{ collapsed: detectItem(user) }">
	        <div class="collapse_head" @click="toggleItem(user)">
	          <div class="collapse_container">{{ user.name.last }}</div>
	        </div>


	        <div class="collapse_body" :class="{ show: detectItem(user) }" :style="{ height: toggleHeight(user) }">
	          <div class="collapse_container">{{ user.cell }}</div>
	        </div>


	      </div>
	    </div>
 -->

	</div>
</template>



<script>
//import VueCollapse from 'vue2-collapse'

export default {
	name: 'NameList',
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
		});

	    // if (this.items != null) {
	    //   this.handleTrigger(this.triggerItem);
	    // }
	    
	    //window.addEventListener('resize', this.handleResize);
	},
	methods: {
	    getGender(gender) {
	    	switch(gender) {
	    		case "female": return "fas fa-female"
	    		case "male": return "fas fa-male"
	    	}
	    },
	    //accordion start
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
    
	    handleTrigger(index) {
	      if (index == null) {
	        return;
	      }

	      let targetItem = document.querySelector('[data-collapse]').childNodes[index];
	      let targetTrigger = targetItem.firstElementChild;
	      targetTrigger.click();
	    },
	    toggleHeight(user) {
	      if (this.detectItem(user)) {
	        return this.bodyheight = "230px";
	      } else {
	        return 0;
	      }
	    }	
	},
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
   	//accordion end

	filters: {
		sliceDate(value) {
			return `${value.slice(0, 10)}`
		}
	}
}	

</script>
