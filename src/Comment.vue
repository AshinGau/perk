<template>
	<div id="PerkComment" class="container">
		<h3 class="text-center">评&nbsp;&nbsp论</h3>
		<div class="text-center" id="PerkCommentLink">
			<a href="#" @click.prevent="commentToggle('activeHot')" class="link-perk" :class="{ 'active': activeHot }">热门</a>
			<span>/</span>
			<a href="#" @click.prevent="commentToggle('activeAll')" class="link-perk" :class="{ 'active': activeAll }">全部</a>
			<span>/</span>
			<a href="#" @click.prevent="commentToggle('activeMe')" class="link-perk" :class="{ 'active': activeMe }">与我有关</a>
			<span>/</span>
			<a href="#" @click.prevent="writeComment" class="link-perk">写评论</a>
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
				var self = this;
				this.activeHot = this.activeAll = this.activeMe = false;
				this[str] = true;
				if(!window.$.cookie('user') && str == 'activeMe'){
					window.Ajaxop.LOGIN_MODAL(function(){
						self.$dispatch('CallUpdateMeComments');
					});
				}else if(window.$.cookie('user') && str == 'activeMe'){
					self.$dispatch('CallUpdateMeComments');
				}
			},
			writeComment: function(){
				this.activeHot = this.activeMe = false;
				this.activeAll =true;
				var self = this;
				if(!($.cookie('user'))){
					window.Ajaxop.LOGIN_MODAL(function(){
						window.Ajaxop.COMMENT_MODAL(null, '发表新评论', '新评论将在"全部"中置顶', function(res){
							res.pub_date = new Date(res.pub_date);
							res.replys = [];
							window._all_comments.unshift(res);
						});
					})
				}else{
					window.Ajaxop.COMMENT_MODAL(null, '发表新评论', '新评论将在"全部"中置顶', function(res){
						res.pub_date = new Date(res.pub_date);
						res.replys = [];
						window._all_comments.unshift(res);
					});
				}
			}
		}
	}
</script>