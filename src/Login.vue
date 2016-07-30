<template>
	<div id="PerkLogin" class="container">
		<div class="perk-logo">
			<img :src.literal="public/img/bg/perk.jpg" style="display:block;width:100%;"/>
		</div>
		<h3 class="text-center">登陆</h3>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="手机/账户" v-model="username" />
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="密码" v-model="password" />
		</div>
		<div v-show="loginError" class="form-group text-danger">*账户或密码错误!</div>
		<div class="form-group">
			<button type="button" @click="submitInfo" class="btn btn-nano btn-block btn-primary">登陆</button>
		</div>
		<div class="form-group row">
			<span class="pull-right">
				<i class="text-muted">没有账户?</i>
				<a v-link="{ path: '/user/regist' }">现在注册</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				loginError: false,
				username: '',
				password: ''
			}
		},
		methods: {
			//登陆事件
			submitInfo: function(){
				var self = this,
					body = {
						'username': self.username,
						'password': self.password
					};
				window.$.ajax({
					url: window._server_url + 'api-token-auth/',
					type: 'POST',
					dataType: 'json',
					data: body,
					success: function(res){
						self.loginError = false;
						window.$.cookie('auth', res.token, { expires: 7 });

						/*
						window.$.ajax({
							dataType: 'json',
							url: window._server_url + 'user/',
							type: 'GET',
							beforeSend: function(request) {
								request.setRequestHeader("Authorization", 'Basic ' + window.$.cookie('auth'));
							},
							success: function(res){
								console.log(res);
							},
							error: function(){
								console.log('inner ajax error');
							}
						});
						*/

					},
					error: function(){
						self.loginError = true;
					}
				});
			}
		}
	}
</script>