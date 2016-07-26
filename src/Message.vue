<template>
	<div id="PerkMessage">
		<div class="interval">
			<div class="text-center">
				<img :src="user.portrait" class="perk-portrait" />
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
							<a href="#" class="link-default">
								<span v-if="info.comment"><span class="text-primary">{{ info.username }}</span>在<span class="text-primary">《{{ info.article }}》</span>文章下评论了我</span>
								<span v-else><span class="text-primary">{{ info.username }}</span>在<span class="text-primary">《{{ info.article }}》</span>文章下的评论点了赞</span>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
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
				infos: [
					{
						comment: true,
						username: '高鑫',
						article: '程序员就是累'
					},{
						comment: false,
						username: '夏雨民',
						article: '最最风骚怪'
					}
				]
			}
		}
	}
</script>