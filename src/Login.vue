<template>
	<div id="PerkLogin" class="container">
		<div class="perk-logo">
			<img :src="perkLogo" style="display:block;width:100%;"/>
		</div>
		<h3 class="text-center">登陆</h3>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="手机/账户" v-model="userId" />
		</div>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="密码" v-model="userPwd" />
		</div>
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
				perkLogo: 'public/img/bg/perk.jpg'
			}
		},
		methods: {
			//登陆事件
			submitInfo: function(){
				//这是随便写的登陆认证
				window._auth = true;
				this.$route.router.go({ path: '/user' });
			}
		}
	}
</script>