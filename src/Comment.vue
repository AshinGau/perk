<template>
	<div id="PerkComment" class="container">
		<h3 class="text-center">评&nbsp;&nbsp论</h3>
		<div class="text-center" id="PerkCommentLink">
			<a href="#" @click.prevent="commentToggle('activeHot')" class="link-perk" :class="{ 'active': activeHot }">热门</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="#" @click.prevent="commentToggle('activeAll')" class="link-perk" :class="{ 'active': activeAll }">全部</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="#" @click.prevent="commentToggle('activeMe')" class="link-perk" :class="{ 'active': activeMe }">与我有关</a>
		</div>
		<div id="activeHot" v-show="activeHot">
			<comment-template :comments="hotComments"></comment-template>
		</div>
		<div id="activeAll" v-show="activeAll">
			<comment-template :comments="allComments"></comment-template>
		</div>
		<div id="activeMe" v-show="activeMe">
			<comment-template :comments="meComments"></comment-template>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['hotComments', 'allComments', 'meComments'],
		data: function(){
			return {
				activeHot: true,
				activeAll: false,
				activeMe: false
			}
		},
		methods: {
			commentToggle: function(str){
				if(!window.$.cookie('user') && str == 'activeMe'){
					window._page = this.$route.params.page;
					window._preAction = 'activeMe';
					this.$route.router.go({ name: 'login' });
				}else{
					this.activeHot = this.activeAll = this.activeMe = false;
					this[str] = true;
				}
			}
		}
	}
</script>