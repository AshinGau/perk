module.exports = {
	//登陆，返回auth token
	login: function (body) {
		return $.ajax({
			url: _server_url + 'api-token-auth/',
			type: 'POST',
			dataType: 'json',
			data: body
		});
	},
	//验证auth token是否有效，并返回user_info
	auth: function (auth) {
		return $.ajax({
			dataType: 'json',
			url: window._server_url + 'user/',
			type: 'GET',
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", 'Token ' + auth);
			}
		})
	},
	//网站初始化验证
	INIT_AUTH: function (success) {
		if ($.cookie('auth')) {
			var auth_token = $.cookie('auth');
			var auth_op = this.auth(auth_token);
			auth_op.done(function (res) {
				$.cookie('auth', auth_token, { expires: window._expires });
				$.cookie('user', res.id);
				if (!window._user_info){
					window._user_info = res;
					window._USER_INFO(res);
				}
				typeof success == 'function' && success();
			}).fail(function () {
				$.cookie('auth', 'overdue', { expires: -1 });
			});
		}
	},
	//网站登陆弹出层操作
	LOGIN_MODAL: function (success) {
		var self = this;
		var loginModal = $('#PerkLoginModal');
		loginModal.modal('show');
		$('#PerkLoginModalAffirm').unbind().click(function () {
			var body = {
				username: $('#PerkLoginModalId').val(),
				password: $('#PerkLoginModalPwd').val()
			};
			var login_op = self.login(body);
			login_op.done(function (res) {
				$('#PerkLoginModalError').addClass('hide');
				$.cookie('auth', res.token, { expires: window._expires });
				self.INIT_AUTH(success);
				loginModal.modal('hide');
			}).fail(function () {
				$('#PerkLoginModalError').removeClass('hide');
			});
		});
	},
	//提交评论， 返回comment object
	comment: function (body) {
		return $.ajax({
			dataType: 'json',
			url: window._server_url + 'comment/',
			type: 'POST',
			data: body,
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", 'Token ' + $.cookie('auth'));
			}
		});
	},
	//网站评论弹出层
	COMMENT_MODAL: function (reply_to_id, title, holder, success) {
		var $comment = $('#PerkCommentModal'),
			$title = $('#PerkCommentTitle'),
			$holder = $('#PerkCommentContent'),
			$error = $('#PerkCommentError'),
			$affirm = $('#PerkCommentAffirm'),
			self = this;
		$comment.modal('show');
		$title.text(title);
		$holder.attr('placeholder', holder).val('').focus();
		$affirm.unbind().click(function(){
			var body = {
				article: window._page,
				reply_to: reply_to_id,
				content: $holder.val()
			};
			var comment_op = self.comment(body);
			comment_op.done(function(res){
				$error.addClass('hide');
				typeof success == 'function' && success(res);
				$comment.modal('hide');
			}).fail(function(){
				$error.removeClass('hide');
			});
		})
	},
	like: function(id){
		return $.ajax({
			url: window._server_url + 'like-comment/',
			type: 'POST',
			data: 'comment=' + id,
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", 'Token ' + $.cookie('auth'));
			}
		})
	},
	message: function(){
		return $.ajax({
			dataType: 'json',
			url: window._server_url + 'message/',
			type: 'GET',
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", 'Token ' + $.cookie('auth'));
			}
		})
	}
}