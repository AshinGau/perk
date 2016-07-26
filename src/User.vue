<template>
	<div id="PerkUser">
		<div class="interval">
			<div class="text-center">
				<img :src="user.portrait" class="perk-portrait" />
			</div>
			<div class="text-center">
				<span class="text-muted">{{ user.name }}</span>
			</div>
		</div>	
		<div class="container">
			<h4 class="box-stress">基本信息<a v-link="{ path: '/user/edit' }">编辑</a></h4>
			<table class="table table-bordered">
				<tbody>
					<tr v-for="info in infos">
						<td>{{ info.field }}</td>
						<td>{{ info.content }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	//用户信息全局对象
	window._user_infos = [
		{ field: '姓名', content: '娄佩良' },
		{ field: '学校', content: '重庆八中' },
		{ field: '电话', content: '18220529737' },
		{ field: '邮箱', content: 'ashin@ashin.space' }
	];
	export default{
		data: function(){
			return {
				user: {
					portrait: 'public/img/bg/portrait.png',
					name: '娄佩良'
				},
				infos: window._user_infos
			}
		}
	}
</script>