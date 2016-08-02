<template>
	<ul class="comment-list">
		<li v-for="(cindex, comment) in comments">
			<div class="comment-portrait">
				<img v-if="comment.user.profile.head_img" :src="comment.user.profile.head_img" />
				<img v-else :src.literal="public/img/bg/portrait.png" />
			</div>
			<div class="comment-box">
				<div class="row">
					<span class="text-gray">{{ comment.user.profile.nick_name }}</span>
					<span class="pull-right">
						<span class="text-gray">{{ comment.n_likes }}</span>
					<a class="icon icon-like" href="#" @click.prevent="like(comment, $event)"></a>
					<span>&nbsp;</span>
					<span class="text-gray">{{ comment.n_replies }}</span>
					<a class="icon icon-comment-cnt" href="#" @click.prevent="reply1(cindex)"></a>
					</span>
				</div>
				<div class="comment-content"><a class="link-default" href="#" @click.prevent="reply1(cindex)">{{ comment.content }}</a></div>
				<div class="comment-date">{{ parseDate(comment.pub_date) }}</div>
				<ul class="comment-reply-list">
					<li v-for="(rindex, reply) in comment.replys">
						<div class="text-gray"><i>{{ reply.user.profile.nick_name }}</i> 回复 <i>{{ reply.reply_comment.user.profile.nick_name }}</i>:</div>
						<div class="reply-content"><a class="link-default" href="#" @click.prevent="reply2(cindex, rindex)">{{ reply.content }}</a></div>
						<div class="comment-date">{{ parseDate(reply.pub_date) }}</div>
					</li>
				</ul>
			</div>
		</li>
		<li v-if="!comments.length">暂无评论～～</li>
	</ul>
</template>

<script>
	export default{
		props: ['comments'],
		methods: {
			parseDate: function(dt){
				var now = new Date(),
					days = (now - dt)/24/60/60/1000,
					str;
				if(days < 1/24){
					str = Math.ceil(days*24*60)+'分钟前';
				}else if(days < 1){
					str = Math.ceil(days*24)+'小时前';
				}else if(days < 2){
					str = "昨天";
				}else{
					var month = dt.getMonth() + 1,
						day = dt.getDate();
					if(month < 10)
						month = '0' + month.toString();
					if(day < 10)
						day = '0' + day.toString();
					str = month + '/' + day;				
				}
				return str;
			},
			reply1: function(cindex){
				var comment = this.comments[cindex],
					title = '回复: ' + comment.content,
					holder = '回复' + comment.user.profile.nick_name;
				this.reply(comment.id, title, holder, this.comments[cindex].id);
			},
			reply2: function(cindex, rindex){
				var comment = this.comments[cindex].replys[rindex],
					title = '回复: ' + comment.content,
					holder = '回复' + comment.user.profile.nick_name;
				this.reply(comment.id, title, holder,  this.comments[cindex].id)
			},
			update_comments: function(reply_to, id, res){
				var cAll = window._all_comments;
				for(var key in cAll){
					if(cAll[key].id == id){
						var rc = cAll[key].replys;
						if(id == reply_to)
							res.reply_comment = cAll[key];
						else{
							for(var loop in rc)
								if(rc[loop].id == reply_to)
									res.reply_comment = rc[loop];
						}
						rc.push(res);
						break;
					}
				}
			},
			reply: function(reply_to, title, holder, id){
				var self = this;
				if(!($.cookie('user'))){
					window.Ajaxop.LOGIN_MODAL(function(){
						window.Ajaxop.COMMENT_MODAL(reply_to, title, holder, function(res){
							self.update_comments(reply_to, id, res);
						});
					})
				}else{
					window.Ajaxop.COMMENT_MODAL(reply_to, title, holder, function(res){
						self.update_comments(reply_to, id, res);
					});
				}
			},
			like: function(comment, event){
				var self = this;
				if(!($.cookie('user'))){
					window.Ajaxop.LOGIN_MODAL(function(){
						self.like_assist(comment);
					})
				}else{
					self.like_assist(comment);
				}
			},
			like_assist: function(comment){
				var like_op = window.Ajaxop.like(comment.id);
				like_op.done(function(){
					comment.n_likes++;
				}).fail(function(){
					window._MESSAGE('您已经点过赞～～');
				});
			}
		}
	}
</script>