<template>
	<div id="PerkUserEdit">
		<div class="interval">
			<div class="text-center">
				<img :src="user.portrait" class="perk-portrait" />
			</div>
			<div class="text-center">
				<span class="text-muted">{{ user.name }}</span>
			</div>
		</div>	
		<div class="container">
			<h4 class="box-stress">信息编辑</h4>
			<table class="table table-bordered interval">
				<tbody>
					<tr v-for="info in infos">
						<td>{{ info.field }}</td>
						<td>
							<input type="text" class="form-control" v-model="info.content" />
						</td>
					</tr>
				</tbody>
			</table>
			<div class="form-group">
				<button class="btn btn-nano btn-primary btn-block" @click="submitInfo">提交</button>
			</div>
			<div class="form-group row">
				<button class="btn btn-nano btn-default btn-block" @click="submitCancel">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				user: {
					portrait: 'public/img/bg/portrait.png',
					name: '娄佩良'
				},
				infos: window._user_infos
			}
		},
		methods: {
			submitInfo: function(){
				this.$route.router.go({ path: '/user' });
			},
			submitCancel: function(){
				this.$route.router.go({ path: '/user' });
			}
		}
	}
</script>