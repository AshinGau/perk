<template>
	<div id="PerkMessages">
		<div class="interval">
			<div class="text-center">
				<img v-if="user.img" :src="user.img" />
				<img v-else :src.literal="public/img/bg/portrait_default.png"  class="perk-portrait" />
			</div>
			<div class="text-center">
				<span class="text-muted">{{ user.name }}</span>
			</div>
		</div>	
		<div class="container">
			<h4 class="box-stress">我的消息</h4>
			<table class="table">
				<tbody>
					<tr v-for="info in infos">
						<td>
							<a href="#" class="link-default">{{ info.content }}</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		ready: function(){
			var self = this;
			var message_op = window.Ajaxop.message();
			message_op.done(function(res){
				self.$set('user',{
					img: window._user_info.profile.head_img,
					name: window._user_info.profile.nick_name
				});
				self.$set('infos', res);
			});
		}
	}
</script>