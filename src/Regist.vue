<template>
	<div id="PerkRegist" class="container">
		<div class="perk-logo">
			<img :src.literal="public/img/bg/perk.jpg" style="display:block;width:100%;"/>
		</div>
		<h3 class="text-center">注册</h3>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="手机/账户" v-model="username"/>
			<div v-show="username_error" class="text-danger">*该用户已存在!</div>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="昵称" v-model="nick_name" />
			<div v-show="nick_error" class="text-danger">*不能为空!</div>
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="密码" v-model="password" />
			<div v-show="password_error" class="text-danger">*不能为空!</div>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="学校" v-model="school" />
		</div>
		<div class="form-group">
			<button type="button" @click="submitInfo" class="btn btn-nano btn-block btn-primary">注册</button>
		</div>
		<div class="form-group row">
			<span class="pull-right">
				<i class="text-muted">已有账户！</i>
				<a v-link="{ path: '/user/login' }">马上登陆</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				'username_error': false,
				'password_error': false,
				'nick_error': false
			}
		},
		methods: {
			//注册事件
			submitInfo: function(){
				var self = this;
				var body = {
					'username': self.username,
					'password': self.password,
					'profile.head_img':'',
					'profile.nick_name': self.nick_name,
					'profile.school': self.school
				};
				var regist_op = window.Ajaxop.regist(body);
				regist_op.done(function(){
					self.username_error = self.password_error = self.nick_error = false;
					window._MESSAGE('注册成功，快去登陆吧');
				}).fail(function(xhr, msg, exp){					
					window._MESSAGE('<span class="text-danger">注册失败，请检查注册信息</span>');
					var res = xhr.responseJSON;
					console.log(res);
					if(res.username)
						self.username_error = true;
					if(res.password)
						self.password_error = true;
					if(res.profile)
						self.nick_error = true;
				});
			}
		}
	}
</script>